import { GoogleGenerativeAI }
from "@google/generative-ai";

const genAI =
  new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY
  );

export const generateRoadmap =
  async (
    currentRole,
    targetRole
  ) => {
    try {
      const model =
        genAI.getGenerativeModel({
          model: "gemini-2.0-flash",
        });

      const prompt = `
Create a career roadmap.

Current Role:
${currentRole}

Target Role:
${targetRole}

Generate:

- Month-wise roadmap
- Skills to learn
- Projects to build
- Certifications
- Interview preparation

Return ONLY JSON:

{
 "roadmap":[
   {
     "month":"Month 1",
     "skill":"..."
   }
 ]
}
`;

      const result =
        await model.generateContent(
          prompt
        );

      return result.response.text();
    } catch (error) {
      console.log(error);
      throw error;
    }
  };