import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCommentsUseCase } from "./ListCommentsUseCase";

export class ListCommentsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCommentsUseCase = container.resolve(ListCommentsUseCase);

    const comments = await listCommentsUseCase.execute();

    return response.json(comments);
  }
}
