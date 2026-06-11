import {
  generateCareerAdvice,
} from "../services/careerAdvisor.js";

export const careerAdvice =
  async (req, res) => {
    try {
      const {
        atsScore,
        skills,
        targetRole,
      } = req.body;

      const advice =
        await generateCareerAdvice(
          atsScore,
          skills,
          targetRole
        );

      res.status(200).json({
        success: true,
        advice,
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        success: false,
        message:
          "Career Guidance Failed",
      });
    }
  };