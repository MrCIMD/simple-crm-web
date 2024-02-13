import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { MatTabsModule } from "@angular/material/tabs";
import { LinkType } from "@/utils/types";
import { routes } from '@/utils/routes';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-panel-layout',
  standalone: true,
  imports: [RouterModule, MatTabsModule, MatIcon],
  templateUrl: './panel-layout.component.html',
  styles: ``
})
export default class PanelLayoutComponent {
  public routes: LinkType[] = routes
    .filter(route => !route.display && route.route.includes('panel'))
    .sort((a, b) => a.order - b.order)

}
