import { Router } from "express";
import {
  getSettings,
  createSetting,
} from "../controllers/settingController.js";

const router = Router();

// get all setting database/json
router.get("/", getSettings);

//Create new setting
router.post("/", createSetting);

export default router;
