import { IPostRepository } from "@modules/posts/repositories/interface/IPostRepository";
import { ICreatePostDTO } from "@modules/posts/dtos/ICreatePostDTO";

export class CreatePostUseCase {
  constructor(private postRepository: IPostRepository) {}
  async execute({ userId, title, content }: ICreatePostDTO): Promise<void> {
    await this.postRepository.create({ userId, title, content });
  }
}
