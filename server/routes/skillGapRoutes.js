import express from "express";

import {
  getSkillGap,
} from "../controllers/skillGapController.js";

const router = express.Router();

router.post(
  "/analyze",
  getSkillGap
);

export default router;