import { Component, inject, Input } from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragHandle,
  CdkDragPlaceholder,
  CdkDropList,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";
import { MatMenu, MatMenuItem, MatMenuTrigger } from "@angular/material/menu";
import { MatDivider } from "@angular/material/divider";
import { MatButton } from "@angular/material/button";
import { MatDialog } from "@angular/material/dialog";
import { MatIcon } from "@angular/material/icon";
import { NgStyle } from "@angular/common";
import { Lead, LeadState } from '@utils/types';
import { LeadCardComponent } from "../lead-card/lead-card.component";
import { StateFormDialogComponent } from "../state-form-dialog/state-form-dialog.component";
import { StateDeleteDialogComponent } from "../state-delete-dialog/state-delete-dialog.component";
import { LeadFormData, LeadFormDialogComponent } from "../lead-form-dialog/lead-form-dialog.component";

@Component({
  selector: 'app-lead-status-column',
  standalone: true,
  imports: [
    CdkDrag,
    CdkDragHandle,
    CdkDragPlaceholder,
    CdkDropList,
    MatButton,
    MatDivider,
    MatIcon,
    LeadCardComponent,
    NgStyle,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger
  ],
  templateUrl: './lead-status-column.component.html',
  styleUrl: './lead-status-column.component.scss'
})
export class LeadStatusColumnComponent {
  private readonly _dialog: MatDialog = inject<MatDialog>(MatDialog)

  @Input({required: true}) public state!: LeadState;

  public rowsDrop(event: CdkDragDrop<Lead[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  public openUpdateStateDialog() {
    this._dialog.open(StateFormDialogComponent, {
      width: '90vw',
      maxWidth: '32rem',
      autoFocus: false,
      data: this.state
    });
  }

  public openDeleteStateDialog() {
    this._dialog.open(StateDeleteDialogComponent, {
      width: '90vw',
      maxWidth: '32rem',
      autoFocus: false,
      data: this.state
    });
  }

  public openCreateLeadDialog() {
    const data: LeadFormData = {
      state: {
        ...this.state,
        prospects: []
      }
    };

    this._dialog.open(LeadFormDialogComponent, {
      width: '90vw',
      maxWidth: '64rem',
      autoFocus: false,
      data
    });
  }

  public get disabledDelete(): boolean {
    return !!this.state.prospects.length
  }
}
