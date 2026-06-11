import {
  generateAchievements,
} from "../services/achievementGenerator.js";

export const createAchievements =
  async (req, res) => {
    try {
      const {
        role,
        company,
        skills,
      } = req.body;

      const result =
        await generateAchievements(
          role,
          company,
          skills
        );

      res.status(200).json({
        success: true,
        achievements: result,
      });
    } catch (error) {
      console.log(
        "Achievement Error:",
        error
      );

      res.status(500).json({
        success: false,
        message:
          "Achievement Generation Failed",
        error: error.message,
      });
    }
  };