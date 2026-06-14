import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import tailorRoutes
from "./routes/tailorRoutes.js";
import resumeBuilderRoutes
from "./routes/resumeBuilderRoutes.js";
import projectRoutes
from "./routes/projectRoutes.js";
import achievementRoutes
from "./routes/achievementRoutes.js";
import skillGapRoutes
from "./routes/skillGapRoutes.js";
import careerRoadmapRoutes
from "./routes/careerRoadmapRoutes.js";
import salaryRoutes
from "./routes/salaryRoutes.js";
import careerAdvisorRoutes
from "./routes/careerAdvisorRoutes.js";
import learningRoutes
from "./routes/learningRoutes.js";
import linkedinRoutes
from "./routes/linkedinRoutes.js";
import coverLetterRoutes
from "./routes/coverLetterRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import resumeRoutes from "./routes/resumeRoutes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://girija-ats-resume.vercel.app",
      "https://girija-ats-resume-kiudwl8wr-girija-50s-projects.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],

    credentials: true
  })
);


app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/cover-letter", coverLetterRoutes);

app.use("/api/resume", resumeRoutes);
app.use(
  "/api/salary",
  salaryRoutes
);
app.use("/api/tailor", tailorRoutes);
app.use(
"/api/project",
projectRoutes
);
app.use(
  "/api/achievement",
  achievementRoutes
);
app.use(
  "/api/skill-gap",
  skillGapRoutes
);
app.use(
 "/api/roadmap",
 careerRoadmapRoutes
);
app.use(
  "/api/career",
  careerAdvisorRoutes
);
app.use(
  "/api/learning",
  learningRoutes
);
app.use(
  "/api/linkedin",
  linkedinRoutes
);
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "ATS Resume Analyzer Backend Running Successfully"
  });
});
app.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "API Working"
  });
});
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK"
  });
});
app.get(
  "/achievement-test",
  (req, res) => {
    res.send(
      "Achievement Route Working"
    );
  }
);


const PORT = process.env.PORT || 5000;
app.use(
  "/api/builder",
  resumeBuilderRoutes
);

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});