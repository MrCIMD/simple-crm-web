/**
 * Define el tipo de usuario
 * */
export enum RoleEnum {
  DEVELOPER,
  ADMINISTRATOR,
  CONTRIBUTOR
}

/**
 * Usuario
 * */
export type User = {
  id: string;
  name: string;
  picture: string;
  username: string;
  password: string;
  emails: string[];
  phones: string[];
  role: RoleEnum;
}
