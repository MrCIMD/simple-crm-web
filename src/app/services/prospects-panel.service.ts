import { computed, inject, Injectable, signal } from '@angular/core';
import { catchError, delay, Observable, throwError } from "rxjs";
import { MatSnackBar } from "@angular/material/snack-bar";
import { SignalRequestState, State } from "@utils/types";
import { dataPanelExample } from "@utils/data/panel.example";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";

@Injectable({
  providedIn: 'root',
})
export class ProspectsPanelService {
  private readonly snackBar: MatSnackBar = inject<MatSnackBar>(MatSnackBar);

  #state = signal<SignalRequestState<State>>({
    loading: true,
    data: []
  });

  public collections = computed<State[]>(() => this.#state().data);

  public loading = computed<boolean>(() => this.#state().loading);
  public wasFound = signal<boolean>(true);

  public fetchData() {
    this.wasFound.set(true);

    this.#state.update(previous => ({
      data: previous.data,
      loading: true
    }));

    new Observable<State[]>(observer => {
      observer.next(dataPanelExample);
      observer.complete();
    }).pipe(delay(1500), catchError(err => {
      console.error('Error fetching data', err);

      this.snackBar.open('Error fetching data. Please try again later', '', {
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

  public columnsDrop(event: CdkDragDrop<State[]>): void {
    const lists = this.collections();

    moveItemInArray(lists, event.previousIndex, event.currentIndex);

    this.#state.update(previous => {
      previous.data = lists;

      return previous;
    });
  }
}
