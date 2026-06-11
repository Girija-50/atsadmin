import dotenv from "dotenv";

dotenv.config();

export const analyzeWithGemini =
  async (
    resumeText,
    jobDescription
  ) => {
    try {
      // Gemini API request
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: buildPrompt(
                      resumeText,
                      jobDescription
                    ),
                  },
                ],
              },
            ],
          }),
        }
      );

      const data =
        await response.json();

      // Extract AI response text
      const rawText =
        data?.candidates?.[0]
          ?.content?.parts?.[0]
          ?.text;

      // If empty
      if (!rawText) {
        return {
          analysis:
            "No AI response generated",
        };
      }

      // Try JSON parse
      try {
        const parsed =
          JSON.parse(
            rawText
              .replace(
                /```json/g,
                ""
              )
              .replace(
                /```/g,
                ""
              )
              .trim()
          );

        return parsed;
      } catch {
        // Return raw text if parsing fails
        return {
          analysis: rawText,
        };
      }
    } catch (err) {
      console.log(err);

      return {
        analysis:
          "AI analysis failed",
      };
    }
  };


// Prompt Builder
const buildPrompt = (
  resumeText,
  jobDescription
) => `
You are an ATS Resume Analyzer AI.

Analyze the resume against the job description.

Return STRICT JSON only.

Schema:

{
  "score": number,
  "missingSkills": [],
  "suggestions": [],
  "summary": ""
}

RESUME:
${resumeText}

JOB DESCRIPTION:
${jobDescription}
`;