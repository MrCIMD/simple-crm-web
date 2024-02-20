import { Component } from '@angular/core';
import { MatButton, MatIconButton } from "@angular/material/button";
import { MatDialogActions, MatDialogClose, MatDialogContent } from "@angular/material/dialog";
import { MatDivider } from "@angular/material/divider";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-state-delete-dialog',
  standalone: true,
    imports: [
        MatButton,
        MatDialogActions,
        MatDialogClose,
        MatDialogContent,
        MatDivider,
        MatIcon,
        MatIconButton
    ],
  templateUrl: './state-delete-dialog.component.html',
  styles: ``
})
export class StateDeleteDialogComponent {

}
