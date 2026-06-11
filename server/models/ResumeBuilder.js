import mongoose from "mongoose";

const resumeBuilderSchema =
  new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    title: {
      type: String,
      default: "My Resume",
    },

    template: {
      type: String,
      default: "beginner",
    },

    personalInfo: {
      fullName: String,
      email: String,
      phone: String,
      location: String,
      linkedin: String,
      github: String,
    },

    summary: String,

    skills: [String],

    education: [
      {
        degree: String,
        college: String,
        year: String,
      },
    ],

    experience: [
      {
        company: String,
        role: String,
        duration: String,
        description: String,
      },
    ],

    projects: [
      {
        title: String,
        description: String,
        technologies: String,
      },
    ],

    certifications: [String],

    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

export default mongoose.model(
  "ResumeBuilder",
  resumeBuilderSchema
);