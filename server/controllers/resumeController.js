import Resume from "../models/Resume.js";

import { parseResume } from "../utils/resumeParser.js";

import { extractKeywords } from "../utils/keywordExtractor.js";

import { calculateATSScore } from "../utils/atsScore.js";

import { analyzeWithGemini } from "../utils/aiAnalyzer.js";


// UPLOAD RESUME
export const uploadResume = async (
  req,
  res
) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        error: "No file uploaded",
      });
    }

    // Parse PDF
    const text = await parseResume(
      req.file.buffer
    );

    res.json({
      success: true,

      text,

      preview: text.substring(0, 500),
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};


// ANALYZE RESUME
export const analyzeResume = async (
  req,
  res
) => {
  try {
    const {
      resumeText,
      jobDescription,
    } = req.body;

    // Validation
    if (
      !resumeText ||
      !jobDescription
    ) {
      return res.status(400).json({
        error:
          "Missing resumeText or jobDescription",
      });
    }

    // Extract keywords
    const jdKeywords =
      extractKeywords(
        jobDescription
      );

    const resumeKeywords =
      extractKeywords(
        resumeText
      );

    // Calculate ATS Score
    const atsScore =
      calculateATSScore(
        jdKeywords,
        resumeKeywords
      );

    // Gemini AI analysis
    const aiSuggestions =
      await analyzeWithGemini(
        resumeText,
        jobDescription
      );

    // Save to MongoDB
    await Resume.create({
      userId: req.user.id,

      text: resumeText,

      atsScore,

      suggestions: aiSuggestions,
    });

    // Send response
    res.json({
      success: true,

      atsScore,

      suggestions: aiSuggestions,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};