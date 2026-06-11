import { GoogleGenerativeAI }
from "@google/generative-ai";

const genAI =
  new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY
  );

export const generateAchievements =
  async (
    role,
    company,
    skills
  ) => {
    try {
      const model =
        genAI.getGenerativeModel({
          model: "gemini-2.0-flash",
        });

      const prompt = `
Generate 10 ATS-friendly resume achievements.

Role:
${role}

Company:
${company}

Skills:
${skills}

Return ONLY JSON:

{
 "achievements":[]
}
`;

      const result =
        await model.generateContent(
          prompt
        );

      return result.response.text();
    } catch (error) {
      console.log(
        "Gemini Error:",
        error.message
      );

      // fallback when Gemini quota ends

      return JSON.stringify({
        achievements: [
          `Developed scalable applications using ${skills}.`,
          `Collaborated with cross-functional teams at ${company}.`,
          `Improved system performance through optimization techniques.`,
          `Built reusable modules and components.`,
          `Reduced development time through automation.`,
          `Implemented industry best practices.`,
          `Enhanced user experience and responsiveness.`,
          `Participated in agile development processes.`,
          `Resolved technical issues efficiently.`,
          `Contributed to successful project delivery.`
        ]
      });
    }
  };