import { faker } from "@faker-js/faker";
import { Project } from "@/utils/types";
import { Visibility } from "@/utils/enums";

/**
 * Datos del proyecto por predeterminado
 * */
export const DEFAULT_PROJECT: Project = {
  id: faker.string.uuid(),
  name: faker.company.name(),
  picture: faker.image.avatar(),
  description: faker.lorem.sentence(10),
  visibility: Visibility.PUBLIC,
  modules: []
}
