import connection from "../data/localDb.js";
import urlMetadata from "url-metadata";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export function sendPostsTimeline() {
  return connection.query("SELECT text_post, link FROM post LIMIT 20");
}

export function authUserTimeline(token) {
  try {
    jwt.verify(token, process.env.ENCRYPTPASSWORD);
  } catch {
    return 401;
  }
  return connection.query("SELECT token FROM sessions WHERE token = $1", [
    token,
  ]);
}

export function authPostTimeline(token) {
  try {
    jwt.verify(token, process.env.ENCRYPTPASSWORD);
    connection.query("SELECT token FROM sessions WHERE token = $1", [token]);
  } catch {
    return 401;
  }
  return 200;
}

export function postTimeline(postBody) {
  const { link, text_post } = postBody;

  const linkMetadata = urlMetadata(`${link}`);

  connection.query("INSERT INTO post (link,text_post) VALUES ($1,$2)", [
    linkMetadata,
    text_post,
  ]);
}

export function hastagTrending() {}
