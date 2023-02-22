import { Router } from "express";
import { CreatePostController } from "@modules/posts/useCases/createPost/CreatePostController";
import { ListPostController } from "@modules/posts/useCases/listPost/ListPostController";

import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

const createPostController = new CreatePostController();
const listPostController = new ListPostController();
export const postRouter = Router();

postRouter.use(ensureAuthenticate);
postRouter.post("/", createPostController.handle);
postRouter.get("/", listPostController.handle);
