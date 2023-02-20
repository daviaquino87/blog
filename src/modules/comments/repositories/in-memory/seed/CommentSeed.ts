import { createBuilder } from "fluentbuilder";
import { ICreateCommentDTO } from "../../../dtos/ICreateCommentDTO";

export const commentBuilder = createBuilder<ICreateCommentDTO>((faker) => ({
  userId: faker.random.uuid(),
  postId: faker.random.uuid(),
  text: faker.lorem.paragraph(),
}));
