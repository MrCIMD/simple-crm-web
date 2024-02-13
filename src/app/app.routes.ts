import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component')
  },
  {
    path: 'members',
    loadComponent: () => import('./pages/members/members.component')
  },
  {
    path: 'panel',
    loadComponent: () => import('./pages/panel/components/panel-layout/panel-layout.component'),
    loadChildren: () => import('./pages/panel/panel.routes')
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];
