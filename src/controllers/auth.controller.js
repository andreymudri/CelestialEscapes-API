import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createUser, getUserEmail } from "../repository/auth.repository.js";

const key = process.env.JWT_SECRET || "super_secret_key";
export async function signUp(req, res) {
  try {
    const { email } = req.body;
    const { rows } = await getUserEmail(email);

    if (rows.length > 0) {
      return res.status(409).json({ error: "User already exists" });
    }

    await createUser(req.body);

    return res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
}

export async function signIn(req, res) {
  try {
    const { email, password } = req.body;

    const { rows } = await getUserEmail(email);

    if (rows.length === 0) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const user = rows[0];
    res.user = user;
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign({ email }, key);
    return res.status(200).json({ token });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
