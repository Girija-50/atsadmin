import linkedinATS
from "../services/linkedinATS.js";

export const optimizeATS =
async (req, res) => {

  try {

    const {
      headline,
      about,
      skills,
      certifications,
      experience
    } = req.body;

    const result =
      await linkedinATS(
        headline,
        about,
        skills,
        certifications,
        experience
      );

    res.status(200).json({
      success: true,
      result
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message:
        "ATS Optimization Failed"
    });

  }

};