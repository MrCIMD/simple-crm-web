import { faker } from "@faker-js/faker";
import { Interpretation, LeadState } from "@utils/types";
import { createListProspects } from "@utils/factories";

export const dataPanelExample: LeadState[] = [
  {
    id: faker.string.uuid(),
    name: 'Captación',
    color: '#3498DB',
    positionIndex: 1,
    interpretation: Interpretation.IN_PROCESS,
    prospects: createListProspects(3),
  },
  {
    id: faker.string.uuid(),
    name: 'Seguimiento',
    color: '#F39C12',
    positionIndex: 2,
    interpretation: Interpretation.IN_PROCESS,
    prospects: createListProspects(3),
  },
  {
    id: faker.string.uuid(),
    name: 'Convencido',
    color: '#27AE60',
    positionIndex: 3,
    interpretation: Interpretation.FINISHED,
    prospects: createListProspects(1),
  },
  {
    id: faker.string.uuid(),
    name: 'Rechazado',
    color: '#E74C3C',
    positionIndex: 4,
    interpretation: Interpretation.FINISHED,
    prospects: [],
  },
];
