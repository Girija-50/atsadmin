import express from "express";

import {
  saveResume,
} from "../controllers/resumeBuilderController.js";

const router = express.Router();

router.post(
  "/save-resume",
  saveResume
);

export default router;