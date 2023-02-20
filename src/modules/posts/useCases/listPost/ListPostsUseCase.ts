import { IPostRepository } from "../../repositories/interface/IPostRepository";
import { Post } from "../../models/Post";

export class ListPostsUseCase {
  constructor(private postRepository: IPostRepository) {}

  async execute(): Promise<Post[]> {
    return await this.postRepository.listPosts();
  }
}
