import { IUserRepository } from "@modules/users/repositories/interface/IUserRepository";
import { ICreateUserDTO } from "@modules/users/dtos/ICreateUserDTO";
import { User } from "@modules/users/models/User";

import { AppDataSource } from "@shared/infra/typeorm/data-source";
import { TypeormUser } from "@shared/infra/typeorm/entities/TypeormUser";
import { TypeormUserMapper } from "../mappers/TypeormUserMapper";

export class UserRepository implements IUserRepository {
  private repository;

  constructor() {
    this.repository = AppDataSource.getRepository(TypeormUser);
  }
  async create({ name, email, password }: ICreateUserDTO): Promise<void> {
    const raw = new User({
      name,
      email,
      password,
    });

    const user = this.repository.create(TypeormUserMapper.toTypeorm(raw));
    await this.repository.save(user);
  }
  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOneBy({ email });

    if (!user) {
      return null;
    }
    return TypeormUserMapper.toApplication(user);
  }
}
