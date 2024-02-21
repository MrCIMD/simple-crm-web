import { Component, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef
} from "@angular/material/dialog";
import { MatDivider } from "@angular/material/divider";
import { MatIcon } from "@angular/material/icon";
import { MatButton, MatIconButton } from "@angular/material/button";
import { Lead } from "@utils/types";
import { ProspectsPanelService } from "@services/prospects-panel.service";
import { MatList, MatListItem, MatListModule, MatListSubheaderCssMatStyler } from "@angular/material/list";

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
    MatButton,
    MatListItem
  ],
  templateUrl: './lead-delete-dialog.component.html',
  styles: ``
})
export class LeadDeleteDialogComponent {
  public readonly panelService: ProspectsPanelService = inject<ProspectsPanelService>(ProspectsPanelService);
  public dialogData: Lead = inject<Lead>(MAT_DIALOG_DATA);

  private readonly _dialogRef: MatDialogRef<LeadDeleteDialogComponent> = inject(MatDialogRef<LeadDeleteDialogComponent>)

  public deleteLead() {
    if (this.dialogData?.id) {
      this.panelService.deleteLead(this.dialogData.id);

      this._dialogRef.close(this.dialogData.id)
    }
  }
}
