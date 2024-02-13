import { Routes } from "@angular/router";

const PanelRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./panel.component')
  },
  {
    path: 'tasks',
    loadComponent: () => import('./tasks/tasks.component')
  },
  {
    path: 'prospects',
    loadComponent: () => import('./prospects/prospects.component')
  },
]

export default PanelRoutes;
