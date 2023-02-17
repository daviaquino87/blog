import { IUserDTO } from "../../dtos/IUserDTO";
export interface IUserRepository {
  create({ name, email, password }: IUserDTO): Promise<void>;
}
