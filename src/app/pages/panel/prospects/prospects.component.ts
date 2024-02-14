import { Component } from '@angular/core';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'app-prospects',
  standalone: true,
  imports: [DragDropModule, MatButtonModule, MatIconModule],
  templateUrl: './prospects.component.html',
  styleUrl: './prospects.component.scss'
})
export default class ProspectsComponent {
  timePeriods = [
    'Bronze age',
    'Iron age',
    'Middle ages',
    'Large ages',
  ];

  public drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
  }
}
