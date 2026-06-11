import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  templateType: {
    type: String,
    required: true,
  },

  name: String,

  email: String,

  phone: String,

  summary: String,

  education: String,

  skills: String,

  projects: String,

  experience: String,

  certifications: String,

  atsScore: {
    type: Number,
    default: 0,
  },

  suggestions: {
    type: Object,
    default: {},
  },

  resumeVersion: {
    type: Number,
    default: 1,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model(
  "Resume",
  resumeSchema
);