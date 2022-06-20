import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import chalk from "chalk";

import helloWorld from "./scr/routers/helloAPI.js";
import authRouter from "./scr/routers/authRouter.js";
import usersRouter from "./scr/routers/usersRouter.js";
import timelineRouter from "./scr/routers/timelineRouter.js";

dotenv.config();

const app = express();
app.use(json());
app.use(cors());

app.use(helloWorld);
app.use(authRouter);
app.use(usersRouter);
app.use(timelineRouter);

app.listen(process.env.PORT, () => {
  console.log(chalk.blue("Server running on port " + process.env.PORT));
});
