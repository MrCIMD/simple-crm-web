import { Project, State, User } from "@/utils/types";

/**
 * Define el método de contacto preferido por el prospecto
 * */
export enum HowContact {
  /**
   * WhatsApp - Habilita las funciones de contacto de WhatsApp
   * */
  WHATSAPP,
  /**
   * Phone - Habilita las funciones de vía llamadas telefónicas
   * */
  PHONE,
  /**
   * Email - Habilita las funciones de correo electrónico
   * */
  EMAIL,
}

/*
* Define la estructura de dato del método de contacto
* */
export type ContactMethod = {
  type: HowContact;
  value: string;
  note: string;
}

/*
* Define la estructura de dato del contacto y sus métodos
* */
export type Contact = {
  name: string;
  methods: ContactMethod[];
}


/**
 * Define el medio oficial del prospecto
 * */
export enum OfficialMedia {
  /**
   * WebSite - Sitio web oficial del prospecto
   * */
  WEBSITE,
  /**
   * Facebook - Sitio oficial de Facebook
   * */
  FACEBOOK,
  /**
   * Instagram - Perfil oficial de Instagram
   * */
  INSTAGRAM,
  /**
   * LinkedIn - Perfil oficial de LinkedIn
   * */
  LINKEDIN,
}

/*
* Define la estructura de dato de un sitio oficial
* */
export type OfficialSite = {
  type: OfficialMedia;
  value: string;
  note: string;
}

/**
 * Comentarios generales sobre el prospecto
 * */
export type ProspectComment = {
  comment: string;
  timestamp: Date;
  owner: User;
}

/*
* Prospecto
* */
export type Prospect = {
  id: string;
  name: string;
  location: string[];
  contacts: Contact[];
  comments: ProspectComment[];
  officialSites: OfficialSite[];
  project: Project;
  state: State;
  owner: User;
  createdAt: Date;
  updatedAt: Date;
}
