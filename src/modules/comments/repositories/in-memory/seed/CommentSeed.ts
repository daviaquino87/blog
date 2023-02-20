import { createBuilder } from "fluentbuilder";
import { ICommentDTO } from "../../../dtos/ICommentDTO";

export const commentBuilder = createBuilder<ICommentDTO>((faker) => ({
  userId: faker.random.uuid(),
  postId: faker.random.uuid(),
  text: faker.lorem.paragraph(),
}));
