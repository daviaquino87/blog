import { ICommentDTO } from "../../dtos/ICommentDTO";
import { ICommentRepository } from "../../repositories/interface/ICommentRepository";

export class CreateCommentUseCase {
  constructor(private commentRepository: ICommentRepository) {}
  async execute({ userId, postId, text }: ICommentDTO) {
    await this.commentRepository.create({ userId, postId, text });
  }
}
