import {
  generateRoadmap,
}
from "../services/careerRoadmap.js";

export const getRoadmap =
  async (req, res) => {
    try {
      const {
        currentRole,
        targetRole,
      } = req.body;

      const roadmap =
        await generateRoadmap(
          currentRole,
          targetRole
        );

      res.status(200).json({
        success: true,
        roadmap,
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        success: false,
        message:
          "Roadmap Generation Failed",
        error: error.message,
      });
    }
  };