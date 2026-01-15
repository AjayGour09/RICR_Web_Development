import express from "express";
import {NewContact} from "../controllers/publicController.js"

const router = express.Router();
router.post ('/newContact',NewContact);
export default router;