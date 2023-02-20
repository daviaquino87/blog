import { IPostRepository } from "../interface/IPostRepository";

import { IPostDTO } from "../../dtos/IPostDTO";
import { Post } from "../../models/Post";

export class PostRepositoryInMemory implements IPostRepository {
  public posts: Post[];
  constructor() {
    this.posts = [];
  }
  async create({ userId, title, content }: IPostDTO): Promise<void> {
    const post = new Post({
      userId,
      title,
      content,
    });

    this.posts.push(post);
  }
  async listPosts(): Promise<Post[]> {
    return this.posts;
  }
}
