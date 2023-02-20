import { IPostDTO } from "../../dtos/IPostDTO";
import { IPostRepository } from "../../repositories/interface/IPostRepository";

export class CreatePostUseCase {
  constructor(private postRepository: IPostRepository) {}
  async execute({ userId, title, content }: IPostDTO): Promise<void> {
    await this.postRepository.create({ userId, title, content });
  }
}
