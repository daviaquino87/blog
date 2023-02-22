import { container } from "tsyringe";
import { Request, Response } from "express";
import { AuthUserUseCase } from "./AuthUserUseCase";
import { AppError } from "@errors/AppError";

export class AuthUserController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    if (!email || !password) {
      throw new AppError("All fields must be fille", 404);
    }

    const authUserUseCase = container.resolve(AuthUserUseCase);

    const userAuth = await authUserUseCase.execute({ email, password });

    return response.status(200).json(userAuth);
  }
}
