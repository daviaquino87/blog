import "reflect-metadata";
import "dotenv/config";
import "express-async-errors";
import express from "express";

import { indexRouter } from "@shared/infra/http/routes/index.routes";
import { verifyError } from "@shared/infra/http/middlewares/verifyError";

const app = express();

app.use(express.json());
app.use(indexRouter);

app.use(verifyError);
app.listen(process.env.PORT || 3000, () => {
  console.log("application running");
});
