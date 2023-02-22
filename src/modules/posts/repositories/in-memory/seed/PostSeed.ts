import { createBuilder } from "fluentbuilder";
import { ICreatePostDTO } from "../../../dtos/ICreatePostDTO";

export const postBuilder = createBuilder<ICreatePostDTO>((faker) => ({
  userId: faker.random.uuid(),
  title: faker.name.jobTitle(),
  content: faker.lorem.paragraph(),
}));
