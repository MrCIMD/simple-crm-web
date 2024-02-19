import { Prospect } from "@utils/types";
import { FormControl, FormGroup } from "@angular/forms";

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
export type LeadState = {
  id: string;
  name: string;
  color: string;
  positionIndex: number;
  interpretation: Interpretation;
  prospects: Prospect[];
}

export type LeadStateForm = FormGroup<{
  name: FormControl<string | null>;
  color: FormControl<string | null>;
  interpretation: FormControl<Interpretation | null>;
}>;
