import { Component, Input } from '@angular/core';
import { AvatarComponent } from "@components/avatar/avatar.component";
import { MatTooltip } from "@angular/material/tooltip";
import { MatIcon } from "@angular/material/icon";
import { DatePipe } from "@angular/common";
import { CdkDrag, CdkDragHandle, CdkDragPlaceholder } from "@angular/cdk/drag-drop";
import { Lead } from '@utils/types';

@Component({
  selector: 'app-lead-card',
  standalone: true,
  imports: [CdkDragHandle, CdkDragPlaceholder, MatIcon, DatePipe, MatTooltip, AvatarComponent, CdkDrag],
  templateUrl: './lead-card.component.html',
  styleUrl: './lead-card.component.scss',
})
export class LeadCardComponent {
  @Input({required: true}) public prospect!: Lead;
}
