import { Component, Input } from '@angular/core';
import { AnimationOptions, LottieDirective } from 'ngx-lottie';

@Component({
  selector: 'app-lottie-loader',
  standalone: true,
  imports: [LottieDirective],
  template: `
    <div class="flex" [style.width.rem]="size" [style.height.rem]="size">
      <div lottie [options]="options" class="flex flex-1">
      </div>
    </div>
  `,
  styles: ``
})
export class LottieLoaderComponent {
  @Input({required: true}) public size!: number;

  public options: AnimationOptions = {
    path: 'assets/lottie-files/loader.json',
  }
}
