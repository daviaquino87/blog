import { Router } from "express";
import { userRouter } from "./user.routes";
import { authRouter } from "./auth.routes";

export const indexRouter = Router();

indexRouter.get("/test", (request, response) => {
  return response.json({ info: "Hello world" });
});

indexRouter.use("/user", userRouter);
indexRouter.use("/auth", authRouter);
