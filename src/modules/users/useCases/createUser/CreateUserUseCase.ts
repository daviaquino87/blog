import { inject, injectable } from "tsyringe";
import { IUserRepository } from "@modules/users/repositories/interface/IUserRepository";
import { ICreateUserDTO } from "@modules/users/dtos/ICreateUserDTO";

import { hash } from "bcrypt";
import { AppError } from "@errors/AppError";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("userRepository") private userRepository: IUserRepository
  ) {}

  async execute({ name, email, password }: ICreateUserDTO): Promise<void> {
    const emailAlreadyExists = await this.userRepository.findByEmail(email);

    if (emailAlreadyExists) {
      throw new AppError("This email is already being used", 404);
    }

    const passwordHash = await hash(password, 8);
    await this.userRepository.create({ name, email, password: passwordHash });
  }
}
