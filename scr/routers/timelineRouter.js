import { Router } from "express";
import {
  controllerPostTimeline,
  ControllerTimeline,
} from "../controllers/timelineController.js";
import { postBodySchema } from "../schemas/postBodySchema.js";
import { postBodySchemaValidate } from "../middlewares/validateSchemaPostBody.js";

const timelineRouter = Router();

timelineRouter.post(
  "/post",
  postBodySchemaValidate(postBodySchema),
  controllerPostTimeline
);
timelineRouter.get("/timeline", ControllerTimeline);

export default timelineRouter;
