import { computed, inject, Injectable, signal } from '@angular/core';
import { catchError, Observable, throwError } from "rxjs";
import { MatSnackBar } from "@angular/material/snack-bar";
import { SignalRequestState, State } from "@utils/types";
import { dataPanelExample } from "@utils/data/panel.example";

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

  constructor() {
    this.fetchData().subscribe(values => {
      this.#state.set({
        loading: false,
        data: values
      })
    });
  }

  public fetchData(): Observable<State[]> {
    return new Observable<State[]>(observer => {
      setTimeout(() => {
        observer.next(dataPanelExample);
        observer.complete();
      }, 1000)
    }).pipe(catchError(err => {
      console.error('Error fetching data', err);

      this.snackBar.open('Error fetching data. Please try again later', '', {
        horizontalPosition: 'end',
        verticalPosition: 'top'
      });

      return throwError(() => 'Error fetching data. Please try again later.')
    }));
  }
}
