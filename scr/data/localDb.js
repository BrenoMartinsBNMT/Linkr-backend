import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

const user = process.env.USER_DB;
const password = process.env.PASSWORD;
const host = process.env.HOST;
const port = process.env.PORT_DB;
const database = process.env.DATABASE;

const db = new Pool({
  user,
  password,
  host,
  port,
  database,
});

export default db;
