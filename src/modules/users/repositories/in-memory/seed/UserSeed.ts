import { createBuilder } from "fluentbuilder";
import { ICreateUserDTO } from "@modules/users/dtos/ICreateUserDTO";

export const userBuilder = createBuilder<ICreateUserDTO>((faker) => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.random.words(),
}));
