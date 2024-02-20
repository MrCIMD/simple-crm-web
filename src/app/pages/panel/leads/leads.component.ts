import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CdkDropList, CdkDropListGroup } from '@angular/cdk/drag-drop';
import { LeadStatusColumnComponent } from "./components/lead-status-column/lead-status-column.component";
import { MatButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { AsyncPipe, isPlatformBrowser } from "@angular/common";
import { ProspectsPanelService } from "@services/prospects-panel.service";
import { LottieLoaderComponent } from "@components/lottie-loader/lottie-loader.component";
import { MatDialog } from "@angular/material/dialog";
import { StateFormDialogComponent } from "./components/state-form-dialog/state-form-dialog.component";

@Component({
  selector: 'app-prospects',
  standalone: true,
  imports: [CdkDropList, CdkDropListGroup, MatButton, MatIcon, AsyncPipe, LeadStatusColumnComponent, LottieLoaderComponent],
  templateUrl: './leads.component.html',
  styleUrl: './leads.component.scss'
})
export default class LeadsComponent implements OnInit {
  private readonly _platform: Object = inject<Object>(PLATFORM_ID);
  private readonly _dialog: MatDialog = inject<MatDialog>(MatDialog);

  public readonly panelService: ProspectsPanelService = inject<ProspectsPanelService>(ProspectsPanelService);

  ngOnInit(): void {
    if (isPlatformBrowser(this._platform)) {
      this.panelService.fetchData();
    }
  }

  public openCreateStateDialog() {
    this._dialog.open(StateFormDialogComponent, {
      width: '90vw',
      maxWidth: '32rem',
      autoFocus: false,
    });
  }
}
