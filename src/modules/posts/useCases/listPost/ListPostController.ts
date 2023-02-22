import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListPostsUseCase } from "./ListPostsUseCase";

export class ListPostController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listPostUseCase = container.resolve(ListPostsUseCase);

    const post = await listPostUseCase.execute();

    return response.json(post);
  }
}
