import { RoleEnum } from ".";
/**
* Tipo de dato de una ruta del sistema
* */
export type Link = {
  route: string;
  icon: string;
  name: string;
  display: boolean;
  order: number;
  roles: RoleEnum[]
}
/**
* Tipo de dato del estado de una petición http
* */
export type SignalRequestState<T> = {
  loading: boolean;
  data: T[];
}
