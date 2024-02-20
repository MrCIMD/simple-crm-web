import { Component, inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import { MatButton, MatIconButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { MatDivider } from "@angular/material/divider";
import { ReactiveFormsModule, Validators } from "@angular/forms";
import { Interpretation, LeadState } from "@utils/types";
import { MatError, MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { JsonPipe } from "@angular/common";
import { FormToolsService } from "@services/form-tools.service";
import { MatRadioButton, MatRadioGroup } from "@angular/material/radio";
import { ProspectsPanelService } from "@services/prospects-panel.service";

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
    JsonPipe,
    MatRadioGroup,
    MatRadioButton
  ],
  templateUrl: './state-form-dialog.component.html',
  styles: ``
})
export class StateFormDialogComponent implements OnInit {
  private readonly _panelService: ProspectsPanelService = inject<ProspectsPanelService>(ProspectsPanelService);
  private readonly _dialogRef: MatDialogRef<StateFormDialogComponent> = inject<MatDialogRef<StateFormDialogComponent>>(MatDialogRef<StateFormDialogComponent>)
  public readonly formTools: FormToolsService = inject<FormToolsService>(FormToolsService);
  public readonly dialogData?: LeadState = inject<LeadState>(MAT_DIALOG_DATA);

  public formGroup = this.formTools.builder.group({
    name: ['', [Validators.required]],
    color: ['#9c27b0', [Validators.required]],
    interpretation: [Interpretation.TODO, [Validators.required]],
  });

  public interpretations = [
    {label: 'Por hacer', value: Interpretation.TODO},
    {label: 'Hecho', value: Interpretation.DONE},
    {label: 'Archivado', value: Interpretation.ARCHIVED},
    {label: 'Rechazado', value: Interpretation.REJECT},
  ];

  ngOnInit() {
    // Asignar datos al formulario si se mandan datos para actualizar
    if (!!this.dialogData?.id) {
      this.formGroup.setValue({
        name: this.dialogData.name,
        color: this.dialogData.color,
        interpretation: this.dialogData.interpretation,
      })
    }
  }

  public submit(): void {
    if (this.formGroup.invalid) return;

    const values = this.formGroup.getRawValue();

    this._panelService.createStateColumn({
      name: `${values.name}`,
      color: `${values.color}`,
      interpretation: values.interpretation || Interpretation.DONE
    });

    this._dialogRef.close(values)
  }
}
