import connection from "../data/db.js";

export function searchUser(username) {
    return connection.query(`
      SELECT * FROM users WHERE username ~ $1
    `, [`^${username}.*`]);
}