import express from "express";
console.log(
  "Achievement Routes Loaded"
);

import {
  createAchievements,
} from "../controllers/achievementController.js";

const router = express.Router();

router.post(
  "/generate",
  createAchievements
);

export default router;