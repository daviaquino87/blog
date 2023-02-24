import { Router } from "express";
import { CreateCommentController } from "@modules/comments/useCases/createComment/CreateCommentController";

const createCommentController = new CreateCommentController();

export const commentRouter = Router();

commentRouter.post("/", createCommentController.handle);
