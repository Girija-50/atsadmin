import fs from "fs";
import PDFParser from "pdf2json";

import analyzeResumeWithAI from "../services/geminiService.js";


// ======================================
// Extract PDF Text Function
// ======================================

const extractPDFText = (filePath) => {
  return new Promise((resolve, reject) => {
    const pdfParser = new PDFParser();

    pdfParser.on(
      "pdfParser_dataError",
      (errData) => {
        reject(errData.parserError);
      }
    );

    pdfParser.on(
      "pdfParser_dataReady",
      (pdfData) => {
        let text = "";

        pdfData.Pages.forEach((page) => {
          page.Texts.forEach((textItem) => {
            text +=
              decodeURIComponent(
                textItem.R[0].T
              ) + " ";
          });
        });

        resolve(text);
      }
    );

    pdfParser.loadPDF(filePath);
  });
};


// ======================================
// Upload Resume Controller
// ======================================

const uploadResume = async (
  req,
  res
) => {
  try {
    // Extract text from PDF
    console.log(req.file);

    if (!req.file) {
      return res.status(400).json({
        message: "No file uploaded"
      });
    }
    const text =
      await extractPDFText(
        req.file.path
      );

    res.status(200).json({
      message:
        "Resume Uploaded Successfully",

      text,
    });
  } catch (error) {
  console.log("UPLOAD ERROR:");
  console.log(error);

  res.status(500).json({
    message: "Resume Upload Failed",
    error: error.message,
  });
}
};


// ======================================
// Analyze Resume Controller
// ======================================

const analyzeResume = async (
  req,
  res
) => {
  try {
    const {
      resumeText,
      jobDescription,
    } = req.body;

    // Gemini AI Analysis
    const aiResult =
      await analyzeResumeWithAI(
        resumeText,
        jobDescription
      );

    res.status(200).json({
      analysis: aiResult,
    });
  } catch (error) {
  console.log(
    "ANALYZE CONTROLLER ERROR:"
  );

  console.log(error);

  res.status(500).json({
    message: "AI Analysis Failed",
    error: error.message,
  });
}
};


// ======================================
// Export Controllers
// ======================================

export {
  uploadResume,
  analyzeResume,
};
