import express from "express";

import { indexRouter } from "./routes/index.routes";
import { verifyError } from "./middlewares/verifyError";

const app = express();

app.use(express.json());
app.use(indexRouter);

app.use(verifyError);
app.listen(3000, () => {
  console.log("application running");
});
