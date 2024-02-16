import { booleanAttribute, Component, Input } from '@angular/core';
import { NgClass, NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [NgOptimizedImage, NgClass],
  templateUrl: './avatar.component.html',
  styles: ``
})
export class AvatarComponent {
  @Input({required: true}) public source!: string;
  @Input({required: true}) public size!: number;
  @Input({transform: booleanAttribute}) public round!: boolean;
}
