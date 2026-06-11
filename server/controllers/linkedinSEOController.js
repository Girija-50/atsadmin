import linkedinSEO
from "../services/linkedinSEO.js";

export const optimizeSEO =
async (req, res) => {

  try {

    const { role } = req.body;

    const result =
      await linkedinSEO(role);

    res.status(200).json({
      success: true,
      result
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "SEO Optimization Failed"
    });

  }

};