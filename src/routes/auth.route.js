import express from "express";
import { signInSchema, signUpSchema } from "../schemas/auth.schema.js";
import { signIn, signUp } from "../controllers/auth.controller.js";
import validateRequestBody from "../middlewares/schema.middleware.js";

const authRoute = express.Router();

authRoute.post("/signup", validateRequestBody(signUpSchema), signUp);
authRoute.post("/signin", validateRequestBody(signInSchema), signIn);

export default authRoute;