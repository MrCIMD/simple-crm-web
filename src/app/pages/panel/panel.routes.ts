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
    path: 'leads',
    loadComponent: () => import('./leads/leads.component')
  },
]

export default PanelRoutes;
