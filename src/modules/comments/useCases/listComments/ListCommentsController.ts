import { AppError } from "@errors/AppError";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCommentsUseCase } from "./ListCommentsUseCase";

export class ListCommentsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { postId } = request.query;
    const listCommentsUseCase = container.resolve(ListCommentsUseCase);

    if (!postId) {
      throw new AppError("All fields must be fille", 404);
    }

    const comments = await listCommentsUseCase.execute(String(postId));

    return response.json(comments);
  }
}
