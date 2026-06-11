import dotenv from "dotenv";
dotenv.config();

import { GoogleGenerativeAI }
from "@google/generative-ai";

const genAI =
new GoogleGenerativeAI(
process.env.GEMINI_API_KEY
);

export const generateProjectDescription =
async (
projectName,
techStack
) => {

try {

const model =
genAI.getGenerativeModel({
model: "gemini-2.0-flash",
});

const prompt = `
Generate professional resume project descriptions.

Project Name:
${projectName}

Tech Stack:
${techStack}

Rules:

1. Create exactly 5 bullet points
2. ATS friendly
3. Professional language
4. Action verbs
5. Quantifiable style

Return JSON only:

{
 "bullets":[
   "",
   "",
   "",
   "",
   ""
 ]
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
"Project Generator Error:",
error.message
);

// Development fallback

return {
bullets: [
`Developed ${projectName} using ${techStack}.`,
`Implemented scalable application architecture.`,
`Integrated modern technologies for performance optimization.`,
`Designed responsive user interfaces and APIs.`,
`Improved efficiency through automation and AI features.`
]
};

}
};