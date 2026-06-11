import express from "express";

import {
  salaryPrediction,
} from "../controllers/salaryController.js";

const router = express.Router();

router.post(
  "/predict",
  salaryPrediction
);

export default router;