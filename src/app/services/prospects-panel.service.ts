import { computed, inject, Injectable, signal } from '@angular/core';
import { catchError, delay, Observable, throwError } from "rxjs";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Lead, LeadFormValues, LeadState, LeadStateFormValues, RoleEnum, SignalRequestState } from "@utils/types";
import { dataPanelExample } from "@utils/data/panel.example";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { faker } from "@faker-js/faker";
import { factoryUser } from "@utils/factories";

@Injectable({
  providedIn: 'root',
})
export class ProspectsPanelService {
  private readonly _snackBar: MatSnackBar = inject<MatSnackBar>(MatSnackBar);

  #state = signal<SignalRequestState<LeadState>>({
    loading: true,
    data: []
  });

  public collections = computed<LeadState[]>(() => this.#state().data);
  public loading = computed<boolean>(() => this.#state().loading);
  public wasFound = signal<boolean>(true);

  public fetchData() {
    this.wasFound.set(true);

    this.#state.update(previous => ({
      data: previous.data,
      loading: true
    }));

    new Observable<LeadState[]>(observer => {
      const payload = dataPanelExample.map(leadState => {
        leadState.prospects = leadState.prospects.map(lead => {
          lead.state = {
            ...leadState,
            prospects: []
          }
          return lead;
        });
        return leadState;
      });

      observer.next(payload);
      observer.complete();
    }).pipe(delay(1000), catchError(err => {
      console.error('Error fetching data', err);

      this._snackBar.open('Error fetching data. Please try again later', '', {
        horizontalPosition: 'end',
        verticalPosition: 'top'
      });

      return throwError(() => 'Error fetching data. Please try again later.')
    })).subscribe({
      next: collections => {
        this.wasFound.set(true);

        this.#state.set({
          data: collections,
          loading: false,
        })
      },
      error: () => {
        this.wasFound.set(false);
      }
    });
  }

  public columnsDrop(event: CdkDragDrop<LeadState[]>): void {
    const lists = this.collections();

    moveItemInArray(lists, event.previousIndex, event.currentIndex);

    this.#state.update(previous => {
      previous.data = lists;

      return previous;
    });
  }

  public updateLead(leadId: string, values: LeadFormValues) {
    const lead: Partial<Lead> = {
      name: values.name,
      numberStudents: values.numberStudents,
      contacts: values.contacts.map(contact => {
        return {
          name: contact.name,
          methods: contact.methods.map(method => {
            return {
              type: method.type,
              value: method.value,
            }
          })
        }
      }),
      officialSites: values.officialSites.map(officialSite => {
        return {
          value: officialSite.value,
          type: officialSite.type
        }
      }),
    }

    this.#state.update(previous => {
      const states = previous.data.map(state => {
        const prospects = state.prospects.map(prospect => {
          if (prospect.id === leadId) {
            return {
              ...prospect,
              ...lead
            }
          }
          return {
            ...prospect
          }
        });

        return {
          ...state,
          prospects
        }
      });

      return {
        ...previous,
        data: states
      }
    });
  }

  public createLead(stateId: string, values: LeadFormValues) {
    const location = [
      faker.location.latitude().toFixed(),
      faker.location.longitude().toFixed(),
    ];

    const lead: Lead = {
      id: faker.string.uuid(),
      name: values.name,
      numberStudents: values.numberStudents,
      owner: factoryUser(RoleEnum.CONTRIBUTOR),
      comments: [],
      contacts: values.contacts.map(contact => {
        return {
          name: contact.name,
          methods: contact.methods.map(method => {
            return {
              type: method.type,
              value: method.value,
              note: '',
            }
          })
        }
      }),
      officialSites: values.officialSites.map(officialSite => {
        return {
          value: officialSite.value,
          type: officialSite.type,
          note: ''
        }
      }),
      location,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    this.#state.update(previous => {
      const states = previous.data.map(state => {
        const prospects = state.prospects;
        if (state.id === stateId) {
          lead.state = {
            ...state,
            prospects: []
          }
          prospects.push(lead)
        }

        return {
          ...state,
          prospects
        }
      });

      return {
        ...previous,
        data: states
      }
    });
  }

  public createStateColumn(values: LeadStateFormValues) {
    const {name, color, interpretation} = values;

    this.#state.update(previous => {
      const positionIndex = previous.data.length;

      const payload: LeadState = {
        id: faker.string.uuid(),
        name, color, interpretation,
        positionIndex,
        prospects: [],
      };

      return {
        ...previous,
        data: [...previous.data, payload]
      };
    })
  }

  public deleteStateColumn(id: string) {
    this.#state.update(previous => {
      return {
        ...previous,
        data: previous.data.filter(value => value.id !== id)
      };
    })
  }

  public deleteLead(id: string) {
    this.#state.update(previous => {
      const payload = previous.data.map(state => {
        return {
          ...state,
          prospects: state.prospects.filter(lead => lead.id !== id)
        }
      });

      return {
        ...previous,
        data: payload
      };
    })
  }
}
