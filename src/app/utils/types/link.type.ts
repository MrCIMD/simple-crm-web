import { RoleEnum } from ".";

export type LinkType = {
  route: string;
  icon: string;
  name: string;
  display: boolean;
  order: number;
  roles: RoleEnum[]
}
