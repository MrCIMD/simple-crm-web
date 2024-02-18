import { ChangeDetectorRef, Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ToggleProjectComponent } from "@components/layout/toggle-project/toggle-project.component";
import { isPlatformBrowser } from '@angular/common';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatIcon } from "@angular/material/icon";
import { NavigationEnd, Router, RouterModule } from "@angular/router";
import { MediaMatcher } from "@angular/cdk/layout";
import { Link } from "@utils/types";
import { routes } from "@utils/routes";
import { filter } from "rxjs/operators";

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, MatToolbarModule, MatListModule, RouterModule, MatIcon, ToggleProjectComponent],
  templateUrl: './dashboard-layout.component.html',
  styles: ``
})
export class DashboardLayoutComponent implements OnInit {
  private readonly platform: Object = inject<Object>(PLATFORM_ID);
  private readonly router: Router = inject<Router>(Router);
  private readonly mediaMatcher: MediaMatcher = inject<MediaMatcher>(MediaMatcher);
  private readonly changeDetectorRef: ChangeDetectorRef = inject<ChangeDetectorRef>(ChangeDetectorRef);

  public mediaQueryList: MediaQueryList;
  public currentRoute: string = '';

  private _mediaQueryListener!: () => void;

  public routes: Link[] = routes
    .filter(route => route.display)
    .sort((a, b) => a.order - b.order)

  constructor() {
    this.mediaQueryList = this.mediaMatcher.matchMedia('(max-width: 64rem)');
  }

  ngOnInit() {
    // Se ejecuta en el cliente
    if (isPlatformBrowser(this.platform)) {
      // Se suscribe a los cambios del tamaño de la pantalla
      this.mediaQueryListener = () => this.changeDetectorRef.detectChanges();
      this.mediaQueryList.addEventListener('change', this.mediaQueryListener);
    }
    // Se suscribe a los cambios de la ruta para cambiar el nombre de la ruta actual
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          const link = routes.find(link => {
            const criteria = event.url === '/' ? '/home' : event.url;

            return link.route.includes(criteria)
          });

          if (link) {
            this.currentRoute = link.name;
          }
        }
      })
  }

  get mediaQueryListener(): () => void {
    return this._mediaQueryListener;
  }

  set mediaQueryListener(value: () => void) {
    this._mediaQueryListener = value;
  }
}
