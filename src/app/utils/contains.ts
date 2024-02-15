import { Project } from "@/utils/types";
import { Visibility } from "@/utils/enums";

/**
 * Datos del proyecto por predeterminado
 * */
export const DEFAULT_PROJECT: Project = {
  id: '45196f0a-ca95-11ee-a506-0242ac120002',
  name: 'Proyecto 1',
  picture: 'https://source.unsplash.com/random/300x300',
  description: 'Breve descripción del proyecto 1',
  visibility: Visibility.PUBLIC,
  modules: []
}
