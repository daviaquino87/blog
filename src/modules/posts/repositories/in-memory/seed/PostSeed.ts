import { createBuilder } from "fluentbuilder";
import { IPostDTO } from "../../../dtos/IPostDTO";

export const postBuilder = createBuilder<IPostDTO>((faker) => ({
  userId: faker.random.uuid(),
  title: faker.name.jobTitle(),
  content: faker.random.words(),
}));
