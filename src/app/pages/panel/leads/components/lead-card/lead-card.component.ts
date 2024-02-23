import { Component, inject, Input } from '@angular/core';
import { AvatarComponent } from "@components/avatar/avatar.component";
import { MatTooltip } from "@angular/material/tooltip";
import { MatIcon } from "@angular/material/icon";
import { CdkDrag, CdkDragHandle, CdkDragPlaceholder } from "@angular/cdk/drag-drop";
import { Lead, LeadState } from '@utils/types';
import { LeadFormData, LeadFormDialogComponent } from "../lead-form-dialog/lead-form-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { MatRipple } from "@angular/material/core";
import { RelativeTimePipe } from "../../../../../pipe/relative-time.pipe";
import { MatIconButton } from "@angular/material/button";
import { LeadDeleteDialogComponent } from "../lead-delete-dialog/lead-delete-dialog.component";
import { LeadTrackerDialogComponent } from "../lead-tracker-dialog/lead-tracker-dialog.component";
import { MatMenu, MatMenuItem, MatMenuTrigger } from "@angular/material/menu";

@Component({
  selector: 'app-lead-card',
  standalone: true,
  imports: [CdkDragHandle, CdkDragPlaceholder, MatIcon, RelativeTimePipe, MatTooltip, AvatarComponent, CdkDrag, MatRipple, MatIconButton, MatMenu, MatMenuItem, MatMenuTrigger],
  templateUrl: './lead-card.component.html',
  styleUrl: './lead-card.component.scss',
})
export class LeadCardComponent {
  private readonly _dialog: MatDialog = inject<MatDialog>(MatDialog);

  @Input({required: true}) public lead!: Lead;
  @Input({required: true}) public state!: LeadState;

  public openTrackingLeadDialog() {
    this._dialog.open(LeadTrackerDialogComponent, {
      width: '90vw',
      maxWidth: '64rem',
      autoFocus: false,
      data: this.lead
    });
  }

  public openEditLeadDialog() {
    const data: LeadFormData = {
      lead: this.lead,
      state: {
        ...this.state,
        prospects: []
      }
    }

    this._dialog.open(LeadFormDialogComponent, {
      width: '90vw',
      maxWidth: '48rem',
      autoFocus: false,
      data
    });
  }

  public openDeleteLeadDialog() {
    this._dialog.open(LeadDeleteDialogComponent, {
      width: '90vw',
      maxWidth: '32rem',
      autoFocus: false,
      data: this.lead
    });
  }
}
