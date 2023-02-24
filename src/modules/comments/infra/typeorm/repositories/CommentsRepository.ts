import { ICommentRepository } from "@modules/comments/repositories/interface/ICommentRepository";
import { ICreateCommentDTO } from "@modules/comments/dtos/ICreateCommentDTO";
import { IUpdateCommentDTO } from "@modules/comments/dtos/IUpdateCommentDTO";
import { Comment } from "@modules/comments/models/Comment";

import { AppDataSource } from "@shared/infra/typeorm/data-source";
import { TypeormComment } from "@shared/infra/typeorm/entities/TypeormComment";
import { TypeormCommentsMapper } from "../mappers/TypeormCommentsMapper";

export class CommentRepository implements ICommentRepository {
  private repository;

  constructor() {
    this.repository = AppDataSource.getRepository(TypeormComment);
  }
  async create({ userId, postId, text }: ICreateCommentDTO): Promise<void> {
    const raw = new Comment({ userId, postId, text });

    const comment = this.repository.create(
      TypeormCommentsMapper.toTypeorm(raw)
    );

    await this.repository.save(comment);
  }

  async listComments(): Promise<Comment[]> {
    const data = await this.repository.find();
    const comments = data.map((comment) => {
      return TypeormCommentsMapper.toApplication(comment);
    });

    return comments;
  }

  async findCommentUser(userId: string, commentId: string): Promise<Comment> {
    const comment = await this.repository.findOneBy({ userId, id: commentId });
    console.log(comment);
    if (!comment) {
      return null;
    }

    return TypeormCommentsMapper.toApplication(comment);
  }

  async updateComment({
    userId,
    commentId,
    text,
  }: IUpdateCommentDTO): Promise<void> {
    const comment = await this.repository.findOneBy({ userId, id: commentId });

    await this.repository.update(comment, {
      text,
    });
  }

  async removeComment(userId: string, commentId: string): Promise<void> {
    const comment = await this.repository.findOneBy({ userId, id: commentId });

    await this.repository.delete(comment);
  }
}
