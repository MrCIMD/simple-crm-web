import { RoleEnum, User } from "@utils/types";
import { faker } from "@faker-js/faker";

export const factoryUser = (role: RoleEnum): User => {
  const id = faker.string.uuid();
  const name = faker.person.fullName();
  const picture = faker.image.avatar();
  const username = faker.internet.userName();
  const password = faker.internet.password();
  const phones = [faker.phone.number()]
  const emails = [faker.internet.email()]

  return {
    id,
    name,
    picture,
    username,
    password,
    role,
    phones,
    emails,
  }
}
