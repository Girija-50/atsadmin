function ResumePreview({ resumeData }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "#fff",
      }}
    >
      <h1>{resumeData.name}</h1>

      <p>{resumeData.email}</p>

      <p>{resumeData.phone}</p>

      <hr />

      <h2>Professional Summary</h2>
      <p>{resumeData.summary}</p>

      <h2>Education</h2>
      <p>{resumeData.education}</p>

      <h2>Skills</h2>
      <p>{resumeData.skills}</p>

      <h2>Projects</h2>
      <p>{resumeData.projects}</p>

      <h2>Experience</h2>
      <p>{resumeData.experience}</p>

      <h2>Certifications</h2>
      <p>{resumeData.certifications}</p>
    </div>
  );
}

export default ResumePreview;