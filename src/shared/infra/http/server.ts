import "dotenv/config";
import "express-async-errors";
import express from "express";

import { indexRouter } from "./routes/index.routes";
import { verifyError } from "./middlewares/verifyError";

const app = express();

app.use(express.json());
app.use(indexRouter);

app.use(verifyError);
app.listen(process.env.PORT || 3000, () => {
  console.log("application running");
});
