import { Router } from "express";
import { CreateCommentController } from "@modules/comments/useCases/createComment/CreateCommentController";
import { ListCommentsController } from "@modules/comments/useCases/listComments/ListCommentsController";
import { UpdateCommentController } from "@modules/comments/useCases/updateComment/UpdateCommentController";
import { DropCommentController } from "@modules/comments/useCases/dropComment/DropCommentController";

const createCommentController = new CreateCommentController();
const listCommentsController = new ListCommentsController();
const updateCommentController = new UpdateCommentController();
const dropCommentController = new DropCommentController();

export const commentRouter = Router();

commentRouter.post("/", createCommentController.handle);
commentRouter.get("/", listCommentsController.handle);
commentRouter.put("/update", updateCommentController.handle);
commentRouter.delete("/delete", dropCommentController.handle);
