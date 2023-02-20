import { IPostDTO } from "../../dtos/IPostDTO";
import { Post } from "../../models/Post";

export interface IPostRepository {
  create({ userId, title, content }: IPostDTO): Promise<void>;
  listPosts(): Promise<Post[]>;
}
