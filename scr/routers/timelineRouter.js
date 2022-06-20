import { Router } from "express";
import {
  controllerPostTimeline,
  ControllerTimeline,
} from "../controllers/timelineController.js";

const timelineRouter = Router();

timelineRouter.post("/post", controllerPostTimeline);
timelineRouter.get("/timeline", ControllerTimeline);

export default timelineRouter;
