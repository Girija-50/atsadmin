import getLearningRecommendations
from "../services/learningRecommendation.js";

export const learningRecommendation =
async (req, res) => {
  try {

    const { careerGoal } =
      req.body;

    const result =
      await getLearningRecommendations(
        careerGoal
      );

    res.status(200).json({
      success: true,
      data: result
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message:
        "Recommendation Failed"
    });

  }
};