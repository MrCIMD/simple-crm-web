import { Component, Input } from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragHandle,
  CdkDragPlaceholder,
  CdkDropList,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";
import { MatButton } from "@angular/material/button";
import { MatDivider } from "@angular/material/divider";
import { MatIcon } from "@angular/material/icon";
import { Prospect, State } from '@utils/types';
import { LeadCardComponent } from "../lead-card/lead-card.component";

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
    LeadCardComponent
  ],
  templateUrl: './lead-status-column.component.html',
  styleUrl: './lead-status-column.component.scss'
})
export class LeadStatusColumnComponent {
  @Input({required: true}) public collection!: State;

  public rowsDrop(event: CdkDragDrop<Prospect[]>): void {
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

  public get connectedList(): string[] {
    // return this.collections.map(value => value.id);
    return  []
  }
}