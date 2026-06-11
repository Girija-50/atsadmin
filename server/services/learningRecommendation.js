const getLearningRecommendations = async (
  careerGoal
) => {
  const goal = careerGoal.toLowerCase();

  if (goal.includes("ai")) {
    return {
      skills: [
        "Python",
        "Statistics",
        "Machine Learning",
        "Deep Learning",
        "NLP",
        "Generative AI",
        "MLOps"
      ],

      courses: [
        "Python for Data Science",
        "Machine Learning Fundamentals",
        "Deep Learning Specialization",
        "Generative AI Fundamentals",
        "MLOps Essentials"
      ],

      projects: [
        "AI Resume Analyzer",
        "ChatGPT Clone",
        "Image Classifier",
        "Sentiment Analysis System",
        "AI Interview Assistant"
      ],

      certifications: [
        "Google AI Essentials",
        "IBM Machine Learning",
        "AWS AI Practitioner",
        "Microsoft Azure AI Engineer"
      ]
    };
  }

  if (goal.includes("full stack")) {
    return {
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
        "MongoDB",
        "Docker"
      ],

      courses: [
        "React Complete Guide",
        "Node.js Backend Development",
        "MongoDB Essentials",
        "Docker Basics"
      ],

      projects: [
        "E-Commerce Website",
        "ATS Resume Analyzer",
        "Social Media App",
        "Task Management System"
      ],

      certifications: [
        "Meta Frontend Developer",
        "MongoDB Associate",
        "AWS Cloud Practitioner"
      ]
    };
  }

  return {
    skills: ["Communication","Problem Solving","Teamwork"],

    courses: ["Career Development"],

    projects: ["Portfolio Website"],

    certifications: ["LinkedIn Learning"]
  };
};

export default getLearningRecommendations;