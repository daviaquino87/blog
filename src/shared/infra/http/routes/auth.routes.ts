import { Router } from "express";
import { AuthUserController } from "@modules/users/useCases/authUserUseCase/AuthUserController";

const authUserController = new AuthUserController();

export const authRouter = Router();

authRouter.post("/", authUserController.handler);
