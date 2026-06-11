import express from "express";
import {
  optimizeSEO
} from "../controllers/linkedinSEOController.js";
import {
profileAnalyzer,
headlineGenerator,
aboutGenerator
}
from "../controllers/linkedinController.js";
import {
  optimizeATS
}
from "../controllers/linkedinATSController.js";

const router =
express.Router();

// Profile Analysis
router.post(
"/analyze",
profileAnalyzer
);

// Headline Generator
router.post(
"/headline",
headlineGenerator
);

// About Generator
router.post(
"/about",
aboutGenerator
);
router.post(
  "/seo",
  optimizeSEO
);
router.post(
  "/ats",
  optimizeATS
);
export default router;
