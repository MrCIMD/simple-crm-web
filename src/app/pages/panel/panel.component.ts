import { Component } from '@angular/core';
import { TitleComponent } from "@app/components/title/title.component";

@Component({
  selector: 'app-panel',
  standalone: true,
    imports: [
        TitleComponent
    ],
  templateUrl: './panel.component.html',
  styles: ``
})
export default class PanelComponent {

}
