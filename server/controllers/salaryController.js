import predictSalary from "../services/salaryPredictor.js";

export const salaryPrediction =
  async (req, res) => {
    try {
      const {
        skills,
        experience,
        location,
      } = req.body;

      const result =
        await predictSalary(
          skills,
          experience,
          location
        );

      res.status(200).json({
        success: true,
        salary: result,
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        success: false,
        message:
          "Salary Prediction Failed",
      });
    }
  };