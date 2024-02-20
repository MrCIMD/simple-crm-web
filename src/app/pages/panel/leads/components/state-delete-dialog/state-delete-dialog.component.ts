import { Component, inject } from '@angular/core';
import { MatButton, MatIconButton } from "@angular/material/button";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef
} from "@angular/material/dialog";
import { MatDivider } from "@angular/material/divider";
import { MatIcon } from "@angular/material/icon";
import { LeadState } from "@utils/types";
import { ProspectsPanelService } from "@services/prospects-panel.service";

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
  private readonly _dialogRef: MatDialogRef<StateDeleteDialogComponent> = inject<MatDialogRef<StateDeleteDialogComponent>>(MatDialogRef<StateDeleteDialogComponent>)

  public readonly panelService: ProspectsPanelService = inject<ProspectsPanelService>(ProspectsPanelService);
  public readonly dialogData?: LeadState = inject<LeadState>(MAT_DIALOG_DATA);

  public delete() {
    if (this.dialogData?.id) {
      this.panelService.deleteStateColumn(this.dialogData.id);

      this._dialogRef.close(this.dialogData.id)
    }
  }

}
