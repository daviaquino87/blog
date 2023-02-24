import { AppError } from "@errors/AppError";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { DropCommentUseCase } from "./DropCommentUseCase";

export class DropCommentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { commentId } = request.body;
    const { id } = request.user;

    if (!commentId || !id) {
      throw new AppError("All fields must be fille", 404);
    }

    const dropCommentUseCase = container.resolve(DropCommentUseCase);

    await dropCommentUseCase.execute({ userId: id, commentId });

    return response.status(200).send();
  }
}
