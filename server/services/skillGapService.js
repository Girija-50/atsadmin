export const analyzeSkillGap =
  async (
    resumeText,
    jobDescription
  ) => {
    const resumeSkills =
      resumeText
        .toLowerCase()
        .split(/\s+/);

    const jdSkills =
      jobDescription
        .toLowerCase()
        .split(/\s+/);

    const missingSkills =
      jdSkills.filter(
        (skill) =>
          !resumeSkills.includes(skill)
      );

    const skillGapScore =
      Math.round(
        ((jdSkills.length -
          missingSkills.length) /
          jdSkills.length) *
          100
      );

    return JSON.stringify({
      missingSkills: [
        ...new Set(
          missingSkills
        ),
      ],
      skillGapScore,
    });
  };