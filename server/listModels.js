import dotenv from "dotenv";
dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;

const response = await fetch(
  `https://generativelanguage.googleapis.com/v1/models?key=${apiKey}`
);

const data = await response.json();

console.log(JSON.stringify(data, null, 2));