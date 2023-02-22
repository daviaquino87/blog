import { IUserDTO } from "@modules/users/dtos/ICreateUserDTO";
import { User } from "@modules/users/models/User";
export interface IUserRepository {
  create({ name, email, password }: IUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
}
