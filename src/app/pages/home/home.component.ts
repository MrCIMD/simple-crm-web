import { Component } from '@angular/core';
import { TitleComponent } from "@app/components/title/title.component";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        TitleComponent
    ],
  templateUrl: './home.component.html',
  styles: ``
})
export default class HomeComponent {

}
