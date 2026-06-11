import express from "express";

import {
  learningRecommendation
}
from "../controllers/learningController.js";

const router = express.Router();

router.post(
  "/recommend",
  learningRecommendation
);

export default router;