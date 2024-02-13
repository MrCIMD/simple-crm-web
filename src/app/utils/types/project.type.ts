/**
 * Define el tipo de proyecto, dependiendo el tipo son las funciones a las que se tendran acceso
 * */
export enum Module {
  /**
   * Task Manager - Habilita las características de tareas
   * */
  TASKS,
  /**
   * CRM - Habilita las características de prospección de clientes.
   * */
  PROSPECTS
}

/**
 * Define el nivel de visibilidad
 * */
export enum Visibility {
  /**
   * Público - No se requiere permiso para visualizar o editar el contenido
   * */
  PUBLIC,
  /**
   * Privado - Se requiere permiso para visualizar o editar el contenido
   * */
  PRIVATE,
}

/**
 * Proyectos
 * */
export type Project = {
  id: string;
  name: string;
  description: string;
  visibility: Visibility;
  modules: Module[];
}
