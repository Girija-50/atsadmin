import {
  GoogleGenerativeAI,
} from "@google/generative-ai";

const genAI =
  new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY
  );

export const generateCareerAdvice =
  async (
    atsScore,
    skills,
    targetRole
  ) => {
    try {
      const model =
        genAI.getGenerativeModel({
          model: "gemini-2.0-flash",
        });

      const prompt = `
Current ATS Score:
${atsScore}

Skills:
${skills}

Target Role:
${targetRole}

Suggest:

1. Skills to Learn
2. Projects to Build
3. Certifications
4. ATS Score Improvement

Return JSON:

{
 "recommendedSkills": [],
 "recommendedProjects": [],
 "certifications": [],
 "expectedATS": 0
}
`;

      const result =
        await model.generateContent(
          prompt
        );

      return result.response.text();
    } catch (error) {
      console.log(error);

      return JSON.stringify({
        recommendedSkills: [
          "Docker",
          "AWS",
          "Redis",
        ],
        recommendedProjects: [
          "E-Commerce App",
          "ATS Resume Analyzer",
        ],
        certifications: [
          "AWS Cloud Practitioner",
          "MongoDB Associate",
        ],
        expectedATS: 85,
      });
    }
  };