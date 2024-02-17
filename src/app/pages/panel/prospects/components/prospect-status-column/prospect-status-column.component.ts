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
import { ProspectCardComponent } from "../prospect-card/prospect-card.component";

@Component({
  selector: 'app-prospect-status-column',
  standalone: true,
  imports: [
    CdkDrag,
    CdkDragHandle,
    CdkDragPlaceholder,
    CdkDropList,
    MatButton,
    MatDivider,
    MatIcon,
    ProspectCardComponent
  ],
  templateUrl: './prospect-status-column.component.html',
  styleUrl: './prospect-status-column.component.scss'
})
export class ProspectStatusColumnComponent {
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
