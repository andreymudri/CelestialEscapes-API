import jwt from "jsonwebtoken";

export const authenticateToken = (req, res, next) => {
  const key = process.env.JWT_SECRET || "super_secret_key";
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).send("Authorization failed. No access token.");
  }

  jwt.verify(token, key, (err, user) => {
    if (err) {
      console.log(err);
      return res.status(401).send("Could not verify token");
    }
    req.user = user;
  });
  next();
};