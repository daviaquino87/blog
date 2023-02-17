import { IUserDTO } from "modules/users/dtos/IUserDTO";
import { IUserRepository } from "../../repositories/interface/IUserRepository";
import { hash } from "bcrypt";

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({ name, email, password }: IUserDTO) {
    const passwordHash = await hash(password, 8);
    await this.userRepository.create({ name, email, password: passwordHash });
  }
}
