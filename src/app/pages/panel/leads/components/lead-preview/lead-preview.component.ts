import { Component, Input } from '@angular/core';
import { Lead } from "@utils/types";
import { MatIcon } from "@angular/material/icon";
import { MatDivider } from "@angular/material/divider";

@Component({
  selector: 'app-lead-preview',
  standalone: true,
  imports: [
    MatIcon,
    MatDivider
  ],
  templateUrl: './lead-preview.component.html',
  styles: ``
})
export class LeadPreviewComponent {
  @Input({required: true}) public lead!: Lead;
}
