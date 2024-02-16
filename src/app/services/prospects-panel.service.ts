import { Injectable } from '@angular/core';
import { State } from "@/utils/types";
import { dataPanelExample } from "@/utils/data/panel.example";
import { catchError, Observable, throwError } from "rxjs";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root',
  deps: [MatSnackBar]
})
export class ProspectsPanelService {
  public $collections!: Observable<State[]>;

  constructor(private readonly snackBar: MatSnackBar) {
    this.$collections = this.fetchData();
  }

  public fetchData(): Observable<State[]> {
    return new Observable<State[]>(observer => {
      setTimeout(() => {
        observer.next(dataPanelExample);
        observer.complete();
      }, 500)
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
