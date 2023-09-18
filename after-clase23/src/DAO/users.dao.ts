import { UserInfo } from '../interfaces/user-info.interface';
import { UserInterface } from '../interfaces/user.interface';
import { UsersDAOInterface } from '../interfaces/users-dao.interface';
import { Users } from '../models/user.model';

export class UsersDAO implements UsersDAOInterface {
  async getAll(): Promise<UserInterface[]>{
    return await Users.find()
  }

  async insert(userInfo: UserInfo): Promise<UserInterface>{
    return await Users.create(userInfo)
  }
}