import { LinkType } from "./types";
import { RoleEnum } from "./enums";

export const routes: LinkType[] = [
  {
    route: 'home',
    icon: 'home',
    name: 'Sitio central',
    display: true,
    order: 1,
    roles: [RoleEnum.DEVELOPER, RoleEnum.ADMINISTRATOR, RoleEnum.CONTRIBUTOR]
  },
  {
    route: 'panel',
    icon: 'trello',
    name: 'Panel',
    display: true,
    order: 2,
    roles: [RoleEnum.DEVELOPER, RoleEnum.ADMINISTRATOR, RoleEnum.CONTRIBUTOR]
  },
  {
    route: 'members',
    icon: 'account-group',
    name: 'Miembros',
    display: true,
    order: 3,
    roles: [RoleEnum.DEVELOPER, RoleEnum.ADMINISTRATOR, RoleEnum.CONTRIBUTOR]
  },
];
