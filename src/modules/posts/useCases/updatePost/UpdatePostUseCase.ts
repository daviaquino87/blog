import { IPostRepository } from "../../repositories/interface/IPostRepository";
import { IUpdatePostDTO } from "../../dtos/IUpdatePostDTO";
import { AppError } from "../../../../shared/error/AppError";

export class UpdatePostUseCase {
  constructor(private postRepository: IPostRepository) {}

  async execute({ userId, postId, title, content }: IUpdatePostDTO) {
    const post = await this.postRepository.findPostByUser(userId, postId);

    if (!post) {
      throw new AppError("You can only update your posts");
    }

    await this.postRepository.updatePost({
      userId,
      postId,
      title,
      content,
    });
  }
}
