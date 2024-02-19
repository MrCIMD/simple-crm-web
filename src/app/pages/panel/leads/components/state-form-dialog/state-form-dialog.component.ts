import { Component, inject } from '@angular/core';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from "@angular/material/dialog";
import { MatButton, MatIconButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { MatDivider } from "@angular/material/divider";
import { ReactiveFormsModule, Validators } from "@angular/forms";
import { Interpretation, LeadStateForm } from "@utils/types";
import { MatError, MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { JsonPipe } from "@angular/common";
import { FormToolsService } from "@services/form-tools.service";

@Component({
  selector: 'app-state-form-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatIconButton,
    MatIcon,
    MatDialogClose,
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatDivider,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    MatError,
    JsonPipe
  ],
  templateUrl: './state-form-dialog.component.html',
  styles: ``
})
export class StateFormDialogComponent {
  public readonly formTools: FormToolsService = inject<FormToolsService>(FormToolsService);

  public formGroup: LeadStateForm = this.formTools.builder.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(5)]],
    color: ['', [Validators.required]],
    interpretation: [Interpretation.IN_PROCESS, [Validators.required]],
  });

  public submit(): void {

  }
}
