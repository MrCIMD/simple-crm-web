import { Component } from '@angular/core';
import { CdkDragDrop, CdkDropList, CdkDropListGroup, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ProspectStatusColumnComponent } from "./components/prospect-status-column/prospect-status-column.component";
import { MatButton, MatIconButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { Prospect, State } from "@/utils/types";
import { dataPanelExample } from "@/utils/data/panel.example";

@Component({
  selector: 'app-prospects',
  standalone: true,
  imports: [CdkDropList, CdkDropListGroup, MatButton, MatIcon, ProspectStatusColumnComponent],
  templateUrl: './prospects.component.html',
  styleUrl: './prospects.component.scss'
})
export default class ProspectsComponent {
  public collections = dataPanelExample;

  public columnsDrop(event: CdkDragDrop<State[]>): void {
    moveItemInArray(this.collections, event.previousIndex, event.currentIndex);
  }
}
