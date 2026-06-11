import express from "express";

import {
  tailorResumeController,
} from "../controllers/tailorController.js";

const router = express.Router();

router.post(
  "/tailor",
  tailorResumeController
);

export default router;