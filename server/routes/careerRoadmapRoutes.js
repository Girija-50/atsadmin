import express from "express";

import {
profileAnalyzer,
headlineGenerator
}
from "../controllers/linkedinController.js";

const router =
express.Router();

router.post(
"/analyze",
profileAnalyzer
);

router.post(
"/headline",
headlineGenerator
);

export default router;