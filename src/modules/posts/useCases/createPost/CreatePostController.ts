import { container } from "tsyringe";
import { Request, Response } from "express";
import { CreatePostUseCase } from "./CreatePostUseCase";
import { AppError } from "@errors/AppError";

export class CreatePostController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, content } = request.body;
    const { id } = request.user;

    if (!title || !container || !id) {
      throw new AppError("All fields must be fille", 404);
    }

    const createPostUseCase = container.resolve(CreatePostUseCase);
    await createPostUseCase.execute({ userId: id, title, content });

    return response.status(201).send();
  }
}
