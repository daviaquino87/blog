import { IAuthUserDTO } from "@modules/users/dtos/IAuthUserDTO";
import { ICreateUserDTO } from "@modules/users/dtos/ICreateUserDTO";
import { User } from "@modules/users/models/User";
export interface IUserRepository {
  create({ name, email, password }: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
}
