import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CdkDragDrop, CdkDropList, CdkDropListGroup, moveItemInArray } from '@angular/cdk/drag-drop';
import { ProspectStatusColumnComponent } from "./components/prospect-status-column/prospect-status-column.component";
import { MatButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { AsyncPipe, isPlatformBrowser } from "@angular/common";
import { ProspectsPanelService } from "@services/prospects-panel.service";
import { State } from '@utils/types';

@Component({
  selector: 'app-prospects',
  standalone: true,
  imports: [CdkDropList, CdkDropListGroup, MatButton, MatIcon, ProspectStatusColumnComponent, AsyncPipe],
  providers: [ProspectsPanelService],
  templateUrl: './prospects.component.html',
  styleUrl: './prospects.component.scss'
})
export default class ProspectsComponent implements OnInit {
  public readonly panelService: ProspectsPanelService = inject<ProspectsPanelService>(ProspectsPanelService)

  public collections!: State[];

  ngOnInit() {
    this.collections = this.panelService.collections();
  }

  public columnsDrop(event: CdkDragDrop<State[]>): void {
    moveItemInArray(this.collections, event.previousIndex, event.currentIndex);
  }
}
