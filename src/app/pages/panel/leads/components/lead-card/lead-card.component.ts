import { Component, inject, Input } from '@angular/core';
import { AvatarComponent } from "@components/avatar/avatar.component";
import { MatTooltip } from "@angular/material/tooltip";
import { MatIcon } from "@angular/material/icon";
import { DatePipe } from "@angular/common";
import { CdkDrag, CdkDragHandle, CdkDragPlaceholder } from "@angular/cdk/drag-drop";
import { Lead, LeadState } from '@utils/types';
import { LeadFormData, LeadFormDialogComponent } from "../lead-form-dialog/lead-form-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { MatRipple } from "@angular/material/core";

@Component({
  selector: 'app-lead-card',
  standalone: true,
  imports: [CdkDragHandle, CdkDragPlaceholder, MatIcon, DatePipe, MatTooltip, AvatarComponent, CdkDrag, MatRipple],
  templateUrl: './lead-card.component.html',
  styleUrl: './lead-card.component.scss',
})
export class LeadCardComponent {
  private readonly _dialog: MatDialog = inject<MatDialog>(MatDialog);

  @Input({required: true}) public lead!: Lead;
  @Input({required: true}) public state!: LeadState;

  public openTrackingLeadDialog() {
    const data: LeadFormData = {
      lead: this.lead,
      state: {
        ...this.state,
        prospects: []
      }
    }

    this._dialog.open(LeadFormDialogComponent, {
      width: '90vw',
      maxWidth: '64rem',
      autoFocus: false,
      data
    });
  }
}
