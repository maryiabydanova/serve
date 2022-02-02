import express from "express";

import { router } from "./routes/index.js";

import internalServerErrorConverter from "./middlewares/error/errorConverter.middleware.js";
import errorHandler from "./middlewares/error/errorHandler.middleware.js";

const app = express();

app.use(express.json());
app.use(router);
app.use(internalServerErrorConverter);
app.use(errorHandler);

export default app;
