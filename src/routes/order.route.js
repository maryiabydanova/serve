import express from "express";
const router = express.Router();

import SCHEMAS from "../middlewares/validation/schemas/index.js";
import { orderController } from "../controllers/index.js";
import { validateBody } from "../middlewares/validation/validate/index.js";

router.post("/", validateBody(SCHEMAS.ORDER.ORDER_POST_SCHEMA), orderController.processOrder);

export default router;
