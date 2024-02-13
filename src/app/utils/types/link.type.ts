import { RoleEnum } from "../enums";

export type LinkType = {
  route: string;
  icon: string;
  name: string;
  display: boolean;
  order: number;
  roles: RoleEnum[]
}
