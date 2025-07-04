import express from "express";
import { isAuthenticated, login, logout, register } from "../controlers/user.controller.js";
import { authMiddelware } from "../middleware/auth.middelware.js";

const userRouter = express.Router();

userRouter.post("/login", login);
userRouter.post("/register", register);
userRouter.post("/logout", logout);
userRouter.get("/is-auth",authMiddelware, isAuthenticated);

export default userRouter;
