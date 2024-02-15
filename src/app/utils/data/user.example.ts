import { RoleEnum, User } from "@/utils/types";
import { factoryUser } from "@/utils/data/factories";

export const user1Example: User = factoryUser(RoleEnum.CONTRIBUTOR);
export const user2Example: User = factoryUser(RoleEnum.CONTRIBUTOR);
export const user3Example: User = factoryUser(RoleEnum.CONTRIBUTOR);
