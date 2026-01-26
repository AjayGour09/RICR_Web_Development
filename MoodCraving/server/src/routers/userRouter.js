import express from "express";
import { UserUpdate, UserChangePhoto } from "../controllers/userControllers.js";
import { Protect } from "../middlewares/authMiddleWare.js";
import multer from "multer";

const router = express.Router();
const Uploads = multer();

router.put("/update", Protect, UserUpdate);
router.patch("/changePhoto", Protect, Uploads.single("image"), UserChangePhoto);

export default router;