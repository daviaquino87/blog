import { IPostRepository } from "@modules/posts/repositories/interface/IPostRepository";
import { ICreatePostDTO } from "@modules/posts/dtos/ICreatePostDTO";
import { inject, injectable } from "tsyringe";

@injectable()
export class CreatePostUseCase {
  constructor(
    @inject("postRepository") private postRepository: IPostRepository
  ) {}
  async execute({ userId, title, content }: ICreatePostDTO): Promise<void> {
    await this.postRepository.create({ userId, title, content });
  }
}
