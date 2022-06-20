import {
  sendPostsTimeline,
  authUserTimeline,
  postTimeline,
  authPostTimeline,
} from "../repositories/timelineRepositories.js";

export async function ControllerTimeline(req, res) {
  const { authorization } = req.headers;

  const isUserExist = await authUserTimeline(authorization);
  console.log(isUserExist);
  if (isUserExist === 401) {
    return res.sendStatus(401);
  }
  if (isUserExist.rows.length === 0) {
    return res.status(404).send("usuário não encontrado");
  }

  const data = await sendPostsTimeline();

  res.send(data.rows);
}

export async function controllerPostTimeline(req, res) {
  const { token } = req.body;
  const { postBody } = req.body;
  authPostTimeline(token);
  try {
    await postTimeline(postBody);
    return res.sendStatus(201);
  } catch {
    return res.sendStatus(500);
  }
}
