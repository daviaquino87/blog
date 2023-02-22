import { IUserDTO } from "../../dtos/IUserDTO";
import { User } from "../../../users/models/User";
export interface IUserRepository {
  create({ name, email, password }: IUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
}
