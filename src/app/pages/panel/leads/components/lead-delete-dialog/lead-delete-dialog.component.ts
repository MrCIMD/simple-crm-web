import { Component } from '@angular/core';
import { MatDialogActions, MatDialogClose, MatDialogContent } from "@angular/material/dialog";
import { MatDivider } from "@angular/material/divider";
import { MatIcon } from "@angular/material/icon";
import { MatButton, MatIconButton } from "@angular/material/button";

@Component({
  selector: 'app-lead-delete-dialog',
  standalone: true,
  imports: [
    MatDialogClose,
    MatDialogContent,
    MatDivider,
    MatIcon,
    MatIconButton,
    MatDialogActions,
    MatButton
  ],
  templateUrl: './lead-delete-dialog.component.html',
  styles: ``
})
export class LeadDeleteDialogComponent {

}
