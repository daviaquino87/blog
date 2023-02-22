import { Router } from "express";
import { userRouter } from "./user.routes";
import { authRouter } from "./auth.routes";
import { postRouter } from "./post.routes";

export const indexRouter = Router();

indexRouter.get("/test", (request, response) => {
  return response.json({ info: "Hello world" });
});

indexRouter.use("/user", userRouter);
indexRouter.use("/auth", authRouter);
indexRouter.use("/post", postRouter);
