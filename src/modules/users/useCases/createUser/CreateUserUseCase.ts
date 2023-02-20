import { IUserRepository } from "../../repositories/interface/IUserRepository";
import { IUserDTO } from "../../../users/dtos/IUserDTO";

import { hash } from "bcrypt";
import { AppError } from "../../../../shared/error/AppError";

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({ name, email, password }: IUserDTO) {
    const emailAlreadyExists = await this.userRepository.findByEmail(email);

    if (emailAlreadyExists) {
      throw new AppError("This email is already being used", 404);
    }

    const passwordHash = await hash(password, 8);
    await this.userRepository.create({ name, email, password: passwordHash });
  }
}
