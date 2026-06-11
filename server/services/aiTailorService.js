import dotenv from "dotenv";
dotenv.config();

import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;

// Gemini setup
let genAI = null;

if (apiKey) {
  genAI = new GoogleGenerativeAI(apiKey);
}

export const tailorResume = async (
  resumeText,
  jobDescription
) => {
  try {
    // Development fallback
    if (!genAI) {
      return {
        originalResume: resumeText,
        tailoredResume: `
React Developer

Skills:
React
Node.js
Express.js
MongoDB

Projects:
Built MERN Stack Applications

Summary:
Experienced React Developer with MERN skills.
        `,
        addedKeywords: [
          "React",
          "Node.js",
          "Express",
          "MongoDB",
        ],
        removedWords: [
          "Basic",
          "Beginner",
        ],
        missingSkills: [
          "Docker",
          "AWS",
        ],
        suggestions: [
          "Add measurable achievements",
          "Include project metrics",
          "Mention REST API experience",
        ],
      };
    }

    const model =
      genAI.getGenerativeModel({
        model: "gemini-2.0-flash",
      });

    const prompt = `
You are an ATS Resume Expert.

Resume:
${resumeText}

Job Description:
${jobDescription}

Tasks:

1. Rewrite the resume.
2. Improve ATS score.
3. Add missing keywords.
4. Improve summary.
5. Return JSON only.

Format:

{
 "originalResume":"",
 "tailoredResume":"",
 "addedKeywords":[],
 "removedWords":[],
 "missingSkills":[],
 "suggestions":[]
}
`;

    const result =
      await model.generateContent(prompt);

    const response =
      await result.response;

    return JSON.parse(
      response.text()
    );
  } catch (error) {
    console.log(
      "AI Tailor Error:",
      error.message
    );

    // fallback
    return {
      originalResume: resumeText,
      tailoredResume:
        resumeText,
      addedKeywords: [
        "React",
        "Node.js",
      ],
      removedWords: [],
      missingSkills: [],
      suggestions: [
        "AI temporarily unavailable",
      ],
    };
  }
};