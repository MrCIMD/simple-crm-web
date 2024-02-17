import { Component, Input } from '@angular/core';
import { AvatarComponent } from "@components/avatar/avatar.component";
import { MatTooltip } from "@angular/material/tooltip";
import { MatIcon } from "@angular/material/icon";
import { DatePipe } from "@angular/common";
import { CdkDrag, CdkDragHandle, CdkDragPlaceholder } from "@angular/cdk/drag-drop";
import { Prospect } from '@utils/types';

@Component({
  selector: 'app-prospect-card',
  standalone: true,
  imports: [CdkDragHandle, CdkDragPlaceholder, MatIcon, DatePipe, MatTooltip, AvatarComponent, CdkDrag],
  templateUrl: './prospect-card.component.html',
  styleUrl: './prospect-card.component.scss',
})
export class ProspectCardComponent {
  @Input({required: true}) public prospect!: Prospect;
}
