import { Router } from "express";
import { CreateCommentController } from "@modules/comments/useCases/createComment/CreateCommentController";
import { ListCommentsController } from "@modules/comments/useCases/listComments/ListCommentsController";

const createCommentController = new CreateCommentController();
const listCommentsController = new ListCommentsController();

export const commentRouter = Router();

commentRouter.post("/", createCommentController.handle);
commentRouter.get("/", listCommentsController.handle);
