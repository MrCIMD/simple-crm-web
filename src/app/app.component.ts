import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {DashboardLayoutComponent} from "@components/layout/dashboard-layout/dashboard-layout.component";
import {DomSanitizer} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, HttpClientModule, DashboardLayoutComponent],
  templateUrl: './app.component.html',
  styles: ''
})
export class AppComponent {
  constructor(
    private readonly iconRegistry: MatIconRegistry,
    private readonly domSanitizer: DomSanitizer
  ) {
    this.iconRegistry.addSvgIconSet(
      this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg')
    )
  }
}
