const predictSalary = async (
  skills,
  experience,
  location
) => {
  let min = 3;
  let avg = 5;
  let max = 7;

  const skillText = skills.toLowerCase();

  // MERN Stack
  if (
    skillText.includes("react") &&
    skillText.includes("node") &&
    skillText.includes("mongodb")
  ) {
    min += 2;
    avg += 3;
    max += 5;
  }

  // Experience bonus
  min += Number(experience) * 0.5;
  avg += Number(experience) * 1;
  max += Number(experience) * 1.5;

  // Location bonus
  if (
    location.toLowerCase() === "chennai" ||
    location.toLowerCase() === "bangalore" ||
    location.toLowerCase() === "hyderabad"
  ) {
    min += 1;
    avg += 2;
    max += 3;
  }

  return {
    minimum: `${Math.round(min)} LPA`,
    average: `${Math.round(avg)} LPA`,
    maximum: `${Math.round(max)} LPA`,
  };
};

export default predictSalary;