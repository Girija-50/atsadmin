import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,

  text: String,

  atsScore: Number,

  suggestions: Object,

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model(
  "Resume",
  resumeSchema
);