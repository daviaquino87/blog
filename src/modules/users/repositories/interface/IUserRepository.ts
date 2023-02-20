import { User } from "../../../users/models/User";
import { IUserDTO } from "../../dtos/IUserDTO";
export interface IUserRepository {
  create({ name, email, password }: IUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
}
