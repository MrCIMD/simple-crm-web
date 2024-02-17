import { factoryUser } from "@utils/factories";
import { RoleEnum, User } from "@utils/types";

export const user1Example: User = factoryUser(RoleEnum.CONTRIBUTOR);
export const user2Example: User = factoryUser(RoleEnum.CONTRIBUTOR);
export const user3Example: User = factoryUser(RoleEnum.CONTRIBUTOR);
