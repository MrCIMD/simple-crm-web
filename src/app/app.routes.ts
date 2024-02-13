import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component')
  },
  {
    path: 'panel',
    loadComponent: () => import('./pages/panel/panel.component')
  },
  {
    path: 'members',
    loadComponent: () => import('./pages/members/members.component')
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];
