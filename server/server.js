import resumeRoutes from "./routes/resumeRoutes.js";
import rateLimit from "express-rate-limit";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";

dotenv.config();

const app = express();
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests. Try again later.",
});
app.use(helmet());
app.use("/auth", authRoutes);

app.use("/resume", resumeRoutes);
app.use(limiter);

app.use(express.json());

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("ATS Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});