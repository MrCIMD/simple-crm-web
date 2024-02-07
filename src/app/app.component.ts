import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {DashboardLayoutComponent} from "./components/dashboard-layout/dashboard-layout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardLayoutComponent],
  templateUrl: './app.component.html',
  styles: ''
})
export class AppComponent {
}
