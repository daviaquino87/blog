import { Router } from "express";
import { CreateUserController } from "@modules/users/useCases/createUser/CreateUseController";

const createUserController = new CreateUserController();

export const userRouter = Router();

userRouter.post("/", createUserController.handle);
