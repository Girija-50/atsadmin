import Resume from "../models/Resume.js";

export const saveResume = async (
  req,
  res
) => {
  try {
    const {
      userId,
      templateType,
      name,
      email,
      phone,
      summary,
      education,
      skills,
      projects,
      experience,
      certifications,
    } = req.body;

    const resume =
      await Resume.create({
        userId,
        templateType,
        name,
        email,
        phone,
        summary,
        education,
        skills,
        projects,
        experience,
        certifications,
      });

    res.status(201).json({
      success: true,
      message:
        "Resume Saved Successfully",
      resume,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Save Resume Failed",
      error: error.message,
    });
  }
};