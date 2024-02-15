import { Prospect } from "@/utils/types/prospect.type";

/**
 * Define si la tarea o prospección está en proceso o finalizado
 * */
export enum Interpretation {
  /**
   * Finalizado - Indica que cumplió el proceso establecido y está finalizado
   * */
  FINISHED,
  /**
   * En proceso - Indica que cumplió el proceso establecido y está finalizado
   * */
  IN_PROCESS,
}

/**
 * Estado
 * */
export type State = {
  id: string;
  name: string;
  color: string;
  positionIndex: number;
  interpretation: Interpretation;
  prospects: Prospect[];
}
