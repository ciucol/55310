import { UserInfo } from "./user-info.interface";
import { UserInterface } from "./user.interface";

export interface UsersDAOInterface {
  getAll(): Promise<UserInterface[]>

  insert(userInfo: UserInfo): Promise<UserInterface>
}