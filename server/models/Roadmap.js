import mongoose
from "mongoose";

const roadmapSchema =
  new mongoose.Schema({

    userId: {
      type:
        mongoose.Schema.Types
          .ObjectId,
      ref: "User",
    },

    currentRole: String,

    targetRole: String,

    roadmap: Array,

    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

export default mongoose.model(
  "Roadmap",
  roadmapSchema
);