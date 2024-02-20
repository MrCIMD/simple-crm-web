import { faker } from "@faker-js/faker";
import { factoryUser } from "@utils/factories";
import {
  Contact,
  ContactMethod,
  HowContact,
  Lead,
  LeadComment,
  OfficialMedia,
  OfficialSite,
  RoleEnum
} from "@utils/types";


/**
 * Genera un arreglo de prospectos
 * @param length - Longitud del arreglo
 * @returns Arreglo de prospectos
 * */
export const createListLeads = (length: number): Lead[] => {
  return Array.from({length}).map(() => leadFactory())
}

export const leadFactory = (): Lead => {
  const id = faker.string.uuid();
  const name = faker.company.name();
  const createdAt = faker.date.past({refDate: '14-02-2024'});
  const updatedAt = faker.date.past({refDate: '14-02-2024'});
  const owner = factoryUser(RoleEnum.CONTRIBUTOR);

  const location = [
    faker.location.latitude().toFixed(),
    faker.location.longitude().toFixed(),
  ];

  const numbersContact = Math.floor(Math.random() * 2) + 1; // 1 - 2
  const contacts = createListContacts(numbersContact);

  const numbersOfficialSite = Math.floor(Math.random() * 4) + 1; // 1 - 4
  const officialSites = createListOfficialSites(numbersOfficialSite);

  const numbersProspectComment = Math.floor(Math.random() * 6) + 1; // 1 - 6
  const comments = createListLeadComments(numbersProspectComment);

  const numberStudents = Math.floor(Math.random() * 200) + 50; // 1 - 6

  return {
    id,
    name,
    owner,
    numberStudents,
    officialSites,
    contacts,
    comments,
    location,
    createdAt,
    updatedAt,
  }
}

/**
 * Crea un comentario
 * @returns Comentario
 * */
export const factoryLeadComment = (): LeadComment => {
  const owner = factoryUser(RoleEnum.CONTRIBUTOR);
  const comment = faker.lorem.sentence(10);
  const timestamp = faker.date.past({refDate: '15-02-2024'});

  return {
    owner,
    comment,
    timestamp,
  }
}

/**
 * Genera un arreglo de comentarios del prospecto
 * @param length - Longitud del arreglo
 * @returns Arreglo de comentarios
 * */
export const createListLeadComments = (length: number): LeadComment[] => {
  return Array.from({length}).map(() => factoryLeadComment())
}

/**
 * Crea un sitio oficial
 * @returns Sitio oficinal
 * */
export const factoryOfficialSite = (): OfficialSite => {
  const type = faker.helpers.enumValue(OfficialMedia);
  const note = faker.lorem.sentence(5);
  const value = faker.internet.url();

  return {
    type,
    value,
    note,
  }
}

/**
 * Genera un arreglo de medios oficiales
 * @param length - Longitud del arreglo
 * @returns Arreglo de sitios oficiales
 * */
export const createListOfficialSites = (length: number): OfficialSite[] => {
  return Array.from({length}).map(() => factoryOfficialSite())
}

/**
 * Crea un contacto con una cantidad de métodos de contacto específico
 * @param numberContactMethod - Cantidad de métodos de contacto
 * @returns Contacto con métodos de contacto
 * */
export const factoryContact = (numberContactMethod: number): Contact => {
  const name = faker.person.fullName();
  const methods = createListContactMethods(numberContactMethod)

  return {
    name,
    methods,
  }
}

/**
 * Genera un arreglo de contactos
 * @param length - Longitud del arreglo
 * @returns Arreglo de contactos
 * */
export const createListContacts = (length: number): Contact[] => {
  const numberContactMethod = Math.floor(Math.random() * 5) + 1;

  return Array.from({length}).map(() => factoryContact(numberContactMethod))
}

/**
 * Fabrica un método de contacto con datos ficticios
 * @returns Método de contacto
 * */
export const factoryContactMethod = (): ContactMethod => {
  const type = faker.helpers.enumValue(HowContact);
  const note = faker.lorem.sentence(5);
  const value = factoryContactValue(type);

  return {
    value,
    type,
    note
  }
}

/**
 * Genera un arreglo de métodos de contacto
 * @param length - Longitud del arreglo
 * @returns Arreglo de métodos de contacto
 * */
export const createListContactMethods = (length: number): ContactMethod[] => {
  return Array.from({length}).map(() => factoryContactMethod())
}

/**
 * Genera un valor de contacto según el tipo
 * @param how - Método de contacto
 * @returns Contacto según el método
 * */
export const factoryContactValue = (how: HowContact): string => {
  switch (how) {
    case HowContact.WHATSAPP:
      return faker.phone.number();
    case HowContact.PHONE:
      return faker.phone.number()
    case HowContact.EMAIL:
      return faker.internet.email()
    default:
      return 'N/A'
  }
}
