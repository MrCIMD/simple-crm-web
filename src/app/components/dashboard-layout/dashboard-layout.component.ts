import { ChangeDetectorRef, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ToggleProjectComponent } from "@/components/toggle-project/toggle-project.component";
import { isPlatformBrowser } from '@angular/common';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatIcon } from "@angular/material/icon";
import { RouterModule } from "@angular/router";
import { MediaMatcher } from "@angular/cdk/layout";
import { LinkType } from "@/utils/types";
import { routes } from "@/utils/routes";

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, MatToolbarModule, MatListModule, RouterModule, MatIcon, ToggleProjectComponent],
  templateUrl: './dashboard-layout.component.html',
  styles: ``
})
export class DashboardLayoutComponent implements OnInit {
  public mediaQueryList: MediaQueryList;

  private _mediaQueryListener!: () => void;

  public routes: LinkType[] = routes
    .filter(route => route.display)
    .sort((a, b) => a.order - b.order)

  constructor(
    private readonly mediaMatcher: MediaMatcher,
    private readonly changeDetectorRef: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private readonly platform: Object,
  ) {
    this.mediaQueryList = this.mediaMatcher.matchMedia('(max-width: 64rem)');
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platform)) {
      this.mediaQueryListener = () => this.changeDetectorRef.detectChanges();
      this.mediaQueryList.addEventListener('change', this.mediaQueryListener);
    }
  }

  get mediaQueryListener(): () => void {
    return this._mediaQueryListener;
  }

  set mediaQueryListener(value: () => void) {
    this._mediaQueryListener = value;
  }
}
