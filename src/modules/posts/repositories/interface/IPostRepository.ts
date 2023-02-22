import { ICreatePostDTO } from "@modules/posts/dtos/ICreatePostDTO";
import { IUpdatePostDTO } from "@modules/posts/dtos/IUpdatePostDTO";
import { Post } from "@modules/posts/models/Post";

export interface IPostRepository {
  create({ userId, title, content }: ICreatePostDTO): Promise<void>;
  listPosts(): Promise<Post[]>;
  findPostByUser(userId: string, postId: string): Promise<Post>;
  updatePost({ userId, postId, title, content }: IUpdatePostDTO): Promise<void>;
  dropPost(userId: string, postId: string): Promise<void>;
}
