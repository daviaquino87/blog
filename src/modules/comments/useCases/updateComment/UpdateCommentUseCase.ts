import { IUpdateCommentDTO } from "../../dtos/IUpdateCommentDTO";
import { ICommentRepository } from "../../repositories/interface/ICommentRepository";

export class UpdateCommentUseCase {
  constructor(private commentsRepository: ICommentRepository) {}
  async execute({ id, text }: IUpdateCommentDTO): Promise<void> {
    await this.commentsRepository.updateComment({ id, text });
  }
}
