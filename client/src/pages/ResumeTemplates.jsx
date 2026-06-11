import { useNavigate } from "react-router-dom";

function ResumeTemplates() {
  const navigate = useNavigate();

  const templates = [
    {
      id: "beginner",
      title: "Beginner Template",
      icon: "🎓",
      description:
        "Perfect for students with no experience",
    },

    {
      id: "fresher",
      title: "Fresher Template",
      icon: "🚀",
      description:
        "For fresh graduates and internships",
    },

    {
      id: "professional",
      title: "Professional Template",
      icon: "💼",
      description:
        "For experienced professionals",
    },
  ];

  return (
    <div>
      <h1>Select Template</h1>

      {templates.map((template) => (
        <div
          key={template.id}
          style={{
            border: "1px solid gray",
            padding: "20px",
            margin: "20px",
            cursor: "pointer",
          }}
          onClick={() =>
            navigate(
              `/builder/${template.id}`
            )
          }
        >
          <h2>
            {template.icon}
            {" "}
            {template.title}
          </h2>

          <p>
            {template.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ResumeTemplates;