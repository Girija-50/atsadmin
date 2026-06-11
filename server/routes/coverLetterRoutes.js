import express from "express";

import {
  saveCoverLetter,
  createCoverLetter,
  generateJobCoverLetter,
  getHistory
} from "../controllers/coverLetterController.js";

const router =
  express.Router();

// Generate Cover Letter
router.post(
  "/generate",
  createCoverLetter
);

// Save Cover Letter
router.post(
  "/save",
  saveCoverLetter
);

// Generate Job-Specific Cover Letter
router.post(
  "/job-specific",
  generateJobCoverLetter
);

// Get Cover Letter History
router.get(
  "/history",
  getHistory
);

export default router;