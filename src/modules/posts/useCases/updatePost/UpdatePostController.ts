import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdatePostUseCase } from "./UpdatePostUseCase";
import { AppError } from "@errors/AppError";

export class UpdatePostController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { postId, title, content } = request.body;
    const { id } = request.user;

    if (!title && !content) {
      throw new AppError(
        "To update a post, some parameter must be passed",
        404
      );
    }

    const updatePostUseCase = container.resolve(UpdatePostUseCase);
    await updatePostUseCase.execute({ postId, title, content, userId: id });

    return response.status(204).send();
  }
}
