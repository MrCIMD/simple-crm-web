import {Component} from '@angular/core';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, MatToolbarModule, MatIcon],
  templateUrl: './dashboard-layout.component.html',
  styles: ``
})
export class DashboardLayoutComponent {
  public showSidebar: boolean = true;
}
