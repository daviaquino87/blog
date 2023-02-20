import { IUserDTO } from "modules/users/dtos/IUserDTO";
import { User } from "../../models/User";
import { IUserRepository } from "../interface/IUserRepository";

export class UserRepositoryInMemory implements IUserRepository {
  public users: User[];
  constructor() {
    this.users = [];
  }

  async create({ name, email, password }: IUserDTO): Promise<void> {
    const user = new User({
      name,
      email,
      password,
    });

    this.users.push(user);
  }

  async findByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.email === email);
  }
}
