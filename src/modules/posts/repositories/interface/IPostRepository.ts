import { ICreatePostDTO } from "../../dtos/ICreatePostDTO";
import { IUpdatePostDTO } from "../../dtos/IUpdatePostDTO";
import { Post } from "../../models/Post";

export interface IPostRepository {
  create({ userId, title, content }: ICreatePostDTO): Promise<void>;
  listPosts(): Promise<Post[]>;
  findPostByUser(userId: string, postId: string): Promise<Post>;
  updatePost({ userId, postId, title, content }: IUpdatePostDTO): Promise<void>;
  dropPost(userId: string, postId: string): Promise<void>;
}
