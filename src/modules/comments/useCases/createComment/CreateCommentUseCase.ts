import { ICommentRepository } from "@modules/comments/repositories/interface/ICommentRepository";
import { ICreateCommentDTO } from "@modules/comments/dtos/ICreateCommentDTO";
import { inject, injectable } from "tsyringe";

@injectable()
export class CreateCommentUseCase {
  constructor(
    @inject("commentRepository") private commentRepository: ICommentRepository
  ) {}
  async execute({ userId, postId, text }: ICreateCommentDTO): Promise<void> {
    await this.commentRepository.create({ userId, postId, text });
  }
}
