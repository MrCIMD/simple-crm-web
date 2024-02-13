import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './avatar.component.html',
  styles: ``
})
export class AvatarComponent {
  @Input({required: true}) public source!: string;
  @Input({required: true}) public size!: number;
}
