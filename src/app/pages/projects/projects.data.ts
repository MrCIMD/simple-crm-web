import { Module, Project, Visibility } from "@app/utils/types";

export const projects: Project[] = [
  {
    id: '9dcc47e8-efb0-4ad8-87f6-b152e9426fd8',
    name: 'Proyecto 1',
    description: 'Descripción del proyecto 1',
    visibility: Visibility.PUBLIC,
    modules: [Module.TASKS]
  },
  {
    id: '8e3ca2f8-59e8-441a-8153-19c34d795112',
    name: 'Proyecto 2',
    description: 'Descripción del proyecto 2',
    visibility: Visibility.PRIVATE,
    modules: [Module.TASKS, Module.PROSPECTS]
  },
  {
    id: '46e395d5-1843-496b-9640-97f63f586f90',
    name: 'Proyecto 3',
    description: 'Descripción del proyecto 3',
    visibility: Visibility.PUBLIC,
    modules: [Module.PROSPECTS]
  },
  {
    id: '9ee15fb4-c95c-4580-b12c-c070ba1977ac',
    name: 'Proyecto 4',
    description: 'Descripción del proyecto 4',
    visibility: Visibility.PRIVATE,
    modules: [Module.TASKS]
  },
  {
    id: 'd5766bec-c086-420d-9732-9fc07ccf7982',
    name: 'Proyecto 5',
    description: 'Descripción del proyecto 5',
    visibility: Visibility.PUBLIC,
    modules: [Module.PROSPECTS]
  },
  {
    id: 'cd9ac982-0845-4888-8ce8-20af6062a99d',
    name: 'Proyecto 6',
    description: 'Descripción del proyecto 6',
    visibility: Visibility.PRIVATE,
    modules: [Module.TASKS]
  },
  {
    id: '7056af99-eba7-48df-9528-d1ef12e9d2bd',
    name: 'Proyecto 7',
    description: 'Descripción del proyecto 7',
    visibility: Visibility.PUBLIC,
    modules: [Module.PROSPECTS]
  },
  {
    id: 'c164a2fa-b8f8-45d0-89c2-05319f9579ea',
    name: 'Proyecto 8',
    description: 'Descripción del proyecto 8',
    visibility: Visibility.PUBLIC,
    modules: [Module.TASKS, Module.PROSPECTS]
  },
  {
    id: 'da22b3c2-6c46-45d6-a864-5bfaff4b9cc6',
    name: 'Proyecto 9',
    description: 'Descripción del proyecto 9',
    visibility: Visibility.PRIVATE,
    modules: [Module.TASKS]
  },
  {
    id: '0e8ab76e-fc94-480e-abd8-86d9b7d38f8b',
    name: 'Proyecto 10',
    description: 'Descripción del proyecto 10',
    visibility: Visibility.PUBLIC,
    modules: [Module.PROSPECTS]
  }
];
