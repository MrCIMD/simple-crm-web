import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AvatarComponent } from "@components/avatar/avatar.component";
import { MatDialogClose } from "@angular/material/dialog";
import { MatIcon } from "@angular/material/icon";
import { MatIconButton } from "@angular/material/button";
import { Lead, LeadState } from "@utils/types";
import { MatTooltip } from "@angular/material/tooltip";

@Component({
  selector: 'app-lead-dialog-header',
  standalone: true,
  imports: [
    AvatarComponent,
    MatDialogClose,
    MatIcon,
    MatIconButton,
    MatTooltip
  ],
  templateUrl: './lead-dialog-header.component.html',
  styles: ``
})
export class LeadDialogHeaderComponent {
  @Input() public lead?: Lead;
  @Input({required: true}) public state!: LeadState;

  @Output() public clickQuotation: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  @Output() public clickCalendar: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  public openQuotation(event: MouseEvent) {
    this.clickQuotation.emit(event);
  }

  public openCalendar(event: MouseEvent) {
    this.clickCalendar.emit(event);
  }
}
