import express from 'express';
import {UserUpdate} from "../controllers/userControllers.js"
import { Protect } from '../middlewares/authMiddleWare.js';

const router = express.Router();
router.put("/update",Protect,UserUpdate);
export default router;