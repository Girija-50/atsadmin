const linkedinSEO = async (role) => {

  const roleLower = role.toLowerCase();

  if (roleLower.includes("frontend")) {

    return {
      keywords: [
        "React",
        "JavaScript",
        "Redux",
        "Frontend Development",
        "HTML",
        "CSS",
        "Responsive Design"
      ],

      recruiterSearchTerms: [
        "React Developer",
        "Frontend Engineer",
        "UI Developer",
        "JavaScript Developer"
      ],

      trendingSkills: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "React Query"
      ],

      visibilityScore: 85
    };
  }

  if (roleLower.includes("mern")) {

    return {
      keywords: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "REST API"
      ],

      recruiterSearchTerms: [
        "MERN Developer",
        "Full Stack Developer",
        "Node.js Developer"
      ],

      trendingSkills: [
        "Docker",
        "AWS",
        "Microservices",
        "CI/CD"
      ],

      visibilityScore: 90
    };
  }

  return {
    keywords: [
      "Communication",
      "Leadership",
      "Problem Solving"
    ],

    recruiterSearchTerms: [
      "Professional"
    ],

    trendingSkills: [
      "AI",
      "Cloud Computing"
    ],

    visibilityScore: 70
  };
};

export default linkedinSEO;