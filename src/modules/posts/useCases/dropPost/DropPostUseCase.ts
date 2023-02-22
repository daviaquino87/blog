import { IPostRepository } from "../../repositories/interface/IPostRepository";
import { AppError } from "../../../../errors/AppError";

interface IRequest {
  userId: string;
  postId: string;
}

export class DropPostUseCase {
  constructor(private postRepository: IPostRepository) {}
  async execute({ userId, postId }: IRequest) {
    const post = await this.postRepository.findPostByUser(userId, postId);

    if (!post) {
      throw new AppError("You can only remove your posts");
    }

    await this.postRepository.dropPost(userId, postId);
  }
}
