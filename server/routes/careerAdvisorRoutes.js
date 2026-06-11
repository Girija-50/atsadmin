import express from "express";

import {
  careerAdvice,
} from "../controllers/careerAdvisorController.js";

const router =
  express.Router();

router.post(
  "/guide",
  careerAdvice
);

export default router;