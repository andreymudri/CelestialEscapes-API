import db from "../config/database.js";
import bcrypt from "bcrypt";

export async function getUserEmail(email) {
  try {
    const result = await db.query(`SELECT * FROM users WHERE email = $1;`, [
      email,
    ]);
    return result;
  } catch (err) {
    console.log(err);
    throw new Error("Error getting user by email");
  }
}

export async function createUser(body) {
  try {
    const { name, email, password } = body;
    const hashPassword = bcrypt.hashSync(password, 10);
    const create = await db.query(
      `INSERT INTO users (username, email, password) VALUES ($1, $2, $3);`,
      [name, email, hashPassword]
    );
  } catch (err) {
    console.error(err);
    throw new Error("Error creating user");
  }
}
