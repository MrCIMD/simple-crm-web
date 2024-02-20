import { faker } from "@faker-js/faker";
import { Interpretation, LeadState } from "@utils/types";
import { createListLeads } from "@utils/factories";

export const dataPanelExample: LeadState[] = [
  {
    id: faker.string.uuid(),
    name: 'Captación',
    color: '#3498DB',
    positionIndex: 1,
    interpretation: Interpretation.TODO,
    prospects: createListLeads(3),
  },
  {
    id: faker.string.uuid(),
    name: 'Seguimiento',
    color: '#F39C12',
    positionIndex: 2,
    interpretation: Interpretation.TODO,
    prospects: createListLeads(2),
  },
  {
    id: faker.string.uuid(),
    name: 'Convencido',
    color: '#27AE60',
    positionIndex: 3,
    interpretation: Interpretation.DONE,
    prospects: createListLeads(1),
  },
];
