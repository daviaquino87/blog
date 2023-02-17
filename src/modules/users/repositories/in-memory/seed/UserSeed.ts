import { createBuilder } from "fluentbuilder";
import { IUserDTO } from "../../../dtos/IUserDTO";

export const userBuilder = createBuilder<IUserDTO>((faker) => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.random.words(),
}));
