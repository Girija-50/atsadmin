const linkedinATS = async (
  headline,
  about,
  skills,
  certifications,
  experience
) => {

  let atsScore = 90;

  let missing = ["AWS","Docker"];

  // Skills Check
  if (
    skills &&
    skills.length >= 5
  ) {
    atsScore += 30;
  } else {
    missing.push(
      "Add More Skills"
    );
  }

  // About Check
  if (
    about &&
    about.length > 100
  ) {
    atsScore += 20;
  } else {
    missing.push(
      "Improve About Section"
    );
  }

  // Experience Check
  if (
    experience &&
    experience.length > 50
  ) {
    atsScore += 25;
  } else {
    missing.push(
      "Add Experience"
    );
  }

  // Certification Check
  if (
    certifications &&
    certifications.length > 0
  ) {
    atsScore += 25;
  } else {
    missing.push(
      "Add Certifications"
    );
  }

  return {
    atsScore,
    missing
  };
};

export default linkedinATS;
