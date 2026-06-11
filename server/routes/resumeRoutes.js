import express from "express";
import multer from "multer";

import {
  uploadResume,
  analyzeResume,
} from "../controllers/resumeController.js";

const router = express.Router();

// Storage config
const storage = multer.diskStorage({
  destination: function (
    req,
    file,
    cb
  ) {
    cb(null, "uploads/");
  },

  filename: function (
    req,
    file,
    cb
  ) {
    cb(
      null,
      Date.now() +
        "-" +
        file.originalname
    );
  },
});

const upload = multer({
  storage,
});

// Upload Resume
router.post(
  "/upload",
  upload.single("resume"),
  (req, res, next) => {
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);
    next();
  },
  uploadResume
);



// Analyze Resume
router.post(
  "/analyze",
  analyzeResume
);

export default router;

