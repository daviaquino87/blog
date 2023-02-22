import { IUserRepository } from "../interface/IUserRepository";
import { ICreateUserDTO } from "@modules/users/dtos/ICreateUserDTO";
import { User } from "@modules/users/models/User";

export class UserRepositoryInMemory implements IUserRepository {
  public users: User[];
  constructor() {
    this.users = [];
  }

  async create({ name, email, password }: ICreateUserDTO): Promise<void> {
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
