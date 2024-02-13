import { Component, Input } from '@angular/core';
import { MatDividerModule } from "@angular/material/divider";

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [MatDividerModule],
  templateUrl: './title.component.html',
  styles: ``
})
export class TitleComponent {
  @Input({required: true}) public title!: string;
}
