import { AppError } from "@errors/AppError";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { DropPostUseCase } from "./DropPostUseCase";

export class DropPostController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { postId } = request.body;
    const { id } = request.user;

    if (!postId || !id) {
      throw new AppError("All fields must be fille", 404);
    }

    const dropPostUseCase = container.resolve(DropPostUseCase);

    await dropPostUseCase.execute({ postId, userId: id });

    return response.status(204).send();
  }
}
