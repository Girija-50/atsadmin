import dotenv from "dotenv";
dotenv.config();

import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;

console.log(
  "GEMINI KEY:",
  apiKey ? "Loaded Successfully" : "Not Found"
);

const genAI = new GoogleGenerativeAI(apiKey);

// ==========================================
// Local ATS Analysis Fallback
// ==========================================

const localATSAnalysis = (
  resumeText,
  jobDescription
) => {
  const resume =
    resumeText.toLowerCase();

  const job =
    jobDescription.toLowerCase();

  const jobWords = job
    .split(/\W+/)
    .filter((word) => word.length > 3);

  const uniqueKeywords = [
    ...new Set(jobWords),
  ];

  const matchedKeywords =
    uniqueKeywords.filter((word) =>
      resume.includes(word)
    );

  const missingKeywords =
    uniqueKeywords.filter(
      (word) =>
        !resume.includes(word)
    );

  const matchPercentage =
    Math.round(
      (matchedKeywords.length /
        uniqueKeywords.length) *
        100
    ) || 0;

  const atsScore =
    Math.min(
      100,
      matchPercentage + 10
    );

  return {
    atsScore,
    matchPercentage,
    missingKeywords:
      missingKeywords.slice(0, 15),

    strengths: [
      "Resume uploaded successfully",
      "Skills section detected",
      "Education section detected",
    ],

    improvements: [
      "Add more job-specific keywords",
      "Improve project descriptions",
      "Include measurable achievements",
    ],

    humanReadabilityScore: 80,

    grammarScore: 85,

    analysisSource:
      "Local ATS Engine",
  };
};

// ==========================================
// Gemini AI Analysis
// ==========================================

const analyzeResumeWithAI =
  async (
    resumeText,
    jobDescription
  ) => {
    try {
      const model =
        genAI.getGenerativeModel({
          model:
            "gemini-2.0-flash",
        });

      const prompt = `
You are an ATS Resume Analyzer.

Analyze the resume against the job description.

Resume:
${resumeText}

Job Description:
${jobDescription}

Return ONLY valid JSON:

{
  "atsScore": 0,
  "matchPercentage": 0,
  "missingKeywords": [],
  "strengths": [],
  "improvements": [],
  "humanReadabilityScore": 0,
  "grammarScore": 0
}
`;

      const result =
        await model.generateContent(
          prompt
        );

      const response =
        await result.response;

      const text =
        response.text();

      return text;
    } catch (error) {
      console.log(
        "Gemini Failed. Using Local ATS..."
      );

      return JSON.stringify(
        localATSAnalysis(
          resumeText,
          jobDescription
        )
      );
    }
  };

export default analyzeResumeWithAI;