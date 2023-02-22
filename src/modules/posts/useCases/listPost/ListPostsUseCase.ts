import { IPostRepository } from "@modules/posts/repositories/interface/IPostRepository";
import { Post } from "@modules/posts/models/Post";

export class ListPostsUseCase {
  constructor(private postRepository: IPostRepository) {}

  async execute(): Promise<Post[]> {
    return await this.postRepository.listPosts();
  }
}
