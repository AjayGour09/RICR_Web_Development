import express from "express";
import {
  UserRegister,
  UserLogin,
  UserLogout,
  UserGenOTP,
  UserVerifyOtp,
  UserForgetPassword
} from "../controllers/authConttollers.js";
import { OtpProtect } from "../middlewares/authMiddleWare.js";

const router = express.Router();

router.post("/register", UserRegister);
router.post("/login", UserLogin);
router.get("/logout", UserLogout);

router.post("/genOtp", UserGenOTP);
router.post("/verifyOtp", UserVerifyOtp);
router.post("/forgetPasword",OtpProtect,UserForgetPassword)

export default router;