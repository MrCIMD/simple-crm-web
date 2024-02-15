import { Component } from '@angular/core';
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatButton, MatIconButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { dataPanelExample } from "@/utils/data/panel.example";
import { MatRipple } from "@angular/material/core";
import { MatDivider } from "@angular/material/divider";
import { AvatarComponent } from "@components/common/avatar/avatar.component";
import { MatTooltip } from "@angular/material/tooltip";
import { DatePipe } from "@angular/common";
import { Prospect } from "@/utils/types";

@Component({
  selector: 'app-prospects',
  standalone: true,
  imports: [DragDropModule, MatButton, MatIconButton, MatIcon, MatRipple, MatDivider, MatTooltip, DatePipe, AvatarComponent],
  templateUrl: './prospects.component.html',
  styleUrl: './prospects.component.scss'
})
export default class ProspectsComponent {
  public collections = dataPanelExample;

  timePeriods = [
    'Bronze age',
    'Iron age',
    'Middle ages',
    'Large ages',
  ];

  public drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
  }

  public prospectDrop(event: CdkDragDrop<Prospect[]>): void {
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
}
