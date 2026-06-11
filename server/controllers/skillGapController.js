import {
  analyzeSkillGap,
} from "../services/skillGapService.js";

export const getSkillGap =
  async (req, res) => {
    try {
      const {
        resumeText,
        jobDescription,
      } = req.body;

      console.log(
        "Resume:",
        resumeText
      );

      console.log(
        "JD:",
        jobDescription
      );

      const result =
        await analyzeSkillGap(
          resumeText,
          jobDescription
        );

      res.status(200).json({
        success: true,
        result,
      });
    } catch (error) {
      console.log(
        "SKILL GAP ERROR:"
      );

      console.log(error);

      res.status(500).json({
        success: false,
        message:
          "Skill Gap Analysis Failed",
        error: error.message,
      });
    }
  };