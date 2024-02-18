import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CdkDropList, CdkDropListGroup } from '@angular/cdk/drag-drop';
import { LeadStatusColumnComponent } from "./components/lead-status-column/lead-status-column.component";
import { MatButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { AsyncPipe, isPlatformBrowser } from "@angular/common";
import { ProspectsPanelService } from "@services/prospects-panel.service";
import { LottieLoaderComponent } from "@components/lottie-loader/lottie-loader.component";

@Component({
  selector: 'app-prospects',
  standalone: true,
  imports: [CdkDropList, CdkDropListGroup, MatButton, MatIcon, AsyncPipe, LeadStatusColumnComponent, LottieLoaderComponent],
  providers: [ProspectsPanelService],
  templateUrl: './leads.component.html',
  styleUrl: './leads.component.scss'
})
export default class LeadsComponent implements OnInit {
  private readonly platform: Object = inject<Object>(PLATFORM_ID);

  public readonly panelService: ProspectsPanelService = inject<ProspectsPanelService>(ProspectsPanelService);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platform)) {
      this.panelService.fetchData();
    }
  }
}
