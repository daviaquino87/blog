import { AppError } from "@errors/AppError";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, password } = request.body;

    if (!name || !email || !password) {
      throw new AppError("All fields must be filled", 404);
    }

    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute({
      name,
      email,
      password,
    });

    return response.status(201).send();
  }
}
