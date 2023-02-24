import { Router } from "express";
import { CreatePostController } from "@modules/posts/useCases/createPost/CreatePostController";
import { ListPostController } from "@modules/posts/useCases/listPost/ListPostController";
import { UpdatePostController } from "@modules/posts/useCases/updatePost/UpdatePostController";
import { DropPostController } from "@modules/posts/useCases/dropPost/DropPostController";

const createPostController = new CreatePostController();
const listPostController = new ListPostController();
const updatePostController = new UpdatePostController();
const dropPostController = new DropPostController();

export const postRouter = Router();

postRouter.post("/", createPostController.handle);
postRouter.get("/", listPostController.handle);
postRouter.put("/update", updatePostController.handle);
postRouter.delete("/delete", dropPostController.handle);
