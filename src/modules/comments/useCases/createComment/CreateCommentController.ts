import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCommentUseCase } from "./CreateCommentUseCase";
import { AppError } from "@errors/AppError";

export class CreateCommentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { postId, text } = request.body;
    const { id } = request.user;

    if (!postId || !text || !id) {
      throw new AppError("All fields must be fille", 404);
    }

    const createCommentUseCase = container.resolve(CreateCommentUseCase);

    await createCommentUseCase.execute({ postId, text, userId: id });

    return response.status(201).send();
  }
}
