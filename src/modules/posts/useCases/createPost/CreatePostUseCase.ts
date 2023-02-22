import { ICreatePostDTO } from "../../dtos/ICreatePostDTO";
import { IPostRepository } from "../../repositories/interface/IPostRepository";

export class CreatePostUseCase {
  constructor(private postRepository: IPostRepository) {}
  async execute({ userId, title, content }: ICreatePostDTO): Promise<void> {
    await this.postRepository.create({ userId, title, content });
  }
}
