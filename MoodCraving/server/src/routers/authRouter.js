import express from "express";
import { UserRegister , UserLogin,UserLogout } from "../controllers/authConttollers.js";
const router = express.Router();

router.post("/register", UserRegister);
router.post("/login", UserLogin);
router.get("/logout", UserLogout);

export default router;
