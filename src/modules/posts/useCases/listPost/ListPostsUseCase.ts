import { IPostRepository } from "@modules/posts/repositories/interface/IPostRepository";
import { Post } from "@modules/posts/models/Post";
import { inject, injectable } from "tsyringe";

@injectable()
export class ListPostsUseCase {
  constructor(
    @inject("postRepository") private postRepository: IPostRepository
  ) {}

  async execute(): Promise<Post[]> {
    return await this.postRepository.listPosts();
  }
}
