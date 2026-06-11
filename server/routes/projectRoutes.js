import express from "express";

import {
generateProject
}
from "../controllers/projectController.js";

const router =
express.Router();

router.post(
"/generate",
generateProject
);

export default router;