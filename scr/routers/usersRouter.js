import { Router } from "express";

import { search } from "../controllers/usersController.js";
import { validateToken } from "../middlewares/tokenMiddleware.js";



const usersRouter = Router();

usersRouter.get('/search/:user', validateToken,  search );

export default usersRouter;