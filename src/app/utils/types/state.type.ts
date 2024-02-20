import { Lead } from "@utils/types";
import { FormControl, FormGroup } from "@angular/forms";

/**
 * Define si la tarea o prospección está en proceso o finalizado
 * */
export enum Interpretation {
  /**
   * Por hacer - Clasifica un estado pendiente o en progreso
   * */
  TODO,
  /**
   * Hecho - Clasifica un estado como realizado
   * */
  DONE,
  /**
   * Rechazado - Clasifica un estado como rechazado
   * */
  REJECT,
  /**
   * Archivado - Clasifica a un estado como archivado
   * */
  ARCHIVED
}

/**
 * Estado
 * */
export type LeadState = {
  id: string;
  name: string;
  color: string;
  positionIndex: number;
  interpretation: Interpretation;
  prospects: Lead[];
}

export type LeadStateFormValues = Pick<LeadState, 'name' | 'color' | 'interpretation'>
