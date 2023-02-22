import { Router } from "express";
import { CreatePostController } from "@modules/posts/useCases/createPost/CreatePostController";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

const createPostController = new CreatePostController();

export const postRouter = Router();

postRouter.use(ensureAuthenticate);
postRouter.post("/", createPostController.handle);
