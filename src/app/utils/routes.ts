import { Link, RoleEnum } from "./types";

export const routes: Link[] = [
  {
    route: '/home',
    icon: 'home',
    name: 'Sitio central',
    display: true,
    order: 1,
    roles: [RoleEnum.DEVELOPER, RoleEnum.ADMINISTRATOR, RoleEnum.CONTRIBUTOR]
  },
  {
    route: '/panel',
    icon: 'trello',
    name: 'Panel',
    display: true,
    order: 2,
    roles: [RoleEnum.DEVELOPER, RoleEnum.ADMINISTRATOR, RoleEnum.CONTRIBUTOR]
  },
  {
    route: '/panel/',
    icon: 'view-dashboard',
    name: 'Resumen',
    display: false,
    order: 3,
    roles: [RoleEnum.DEVELOPER, RoleEnum.ADMINISTRATOR, RoleEnum.CONTRIBUTOR]
  },
  {
    route: '/panel/leads',
    icon: 'account-details-outline',
    name: 'Prospectos',
    display: false,
    order: 3,
    roles: [RoleEnum.DEVELOPER, RoleEnum.ADMINISTRATOR, RoleEnum.CONTRIBUTOR]
  },
  {
    route: '/panel/tasks',
    icon: 'calendar-multiple',
    name: 'Tareas',
    display: false,
    order: 3,
    roles: [RoleEnum.DEVELOPER, RoleEnum.ADMINISTRATOR, RoleEnum.CONTRIBUTOR]
  },
  {
    route: '/members',
    icon: 'account-group',
    name: 'Miembros',
    display: true,
    order: 3,
    roles: [RoleEnum.DEVELOPER, RoleEnum.ADMINISTRATOR, RoleEnum.CONTRIBUTOR]
  },
];
