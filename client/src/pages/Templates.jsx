import { Link } from "react-router-dom";

function Templates() {
  const templates = [
    {
      name: "Beginner Modern",
      type: "Student",
      icon: "🎓"
    },
    {
      name: "Campus Placement",
      type: "Student",
      icon: "🏫"
    },
    {
      name: "Software Engineer",
      type: "Fresher",
      icon: "💻"
    },
    {
      name: "Data Analyst",
      type: "Fresher",
      icon: "📊"
    },
    {
      name: "Executive",
      type: "Professional",
      icon: "👔"
    }
  ];

  return (
    <div>
      <h1>Resume Templates</h1>

      {templates.map((template) => (
        <div key={template.name}>
          <h3>
            {template.icon}
            {" "}
            {template.name}
          </h3>

          <p>{template.type}</p>
        </div>
      ))}
    </div>
  );
}

export default Templates;