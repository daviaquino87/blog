import { AppError } from "@errors/AppError";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateCommentUseCase } from "./UpdateCommentUseCase";

export class UpdateCommentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { text, commentId } = request.body;
    const { id } = request.user;

    if (!text || !commentId) {
      throw new AppError(
        "To update a comment, some parameter must be passed",
        404
      );
    }

    const updateCommentUseCase = container.resolve(UpdateCommentUseCase);

    await updateCommentUseCase.execute({ userId: id, commentId, text });

    return response.status(204).send();
  }
}
