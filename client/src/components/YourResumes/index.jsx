import { useState } from "react";

function YourResumes() {
  const [selectedFile, setSelectedFile] =
    useState(null);

  const [result, setResult] =
    useState(null);

  // File selection
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // Upload + Analyze
  const handleUpload = async () => {
    try {
      // Create form data
      const formData = new FormData();

      formData.append(
        "resume",
        selectedFile
      );

      // Upload Resume API
      const uploadResponse = await fetch(
        `${import.meta.env.VITE_API_URL}/resume/upload`,
        {
          method: "POST",

          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "token"
            )}`,
          },

          body: formData,
        }
      );

      const uploadData =
        await uploadResponse.json();

      console.log(uploadData);

      // Analyze Resume API
      const analyzeResponse = await fetch(
        `${import.meta.env.VITE_API_URL}/resume/analyze`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",

            Authorization: `Bearer ${localStorage.getItem(
              "token"
            )}`,
          },

          body: JSON.stringify({
            resumeText:
              uploadData.text,

            jobDescription:
              "React Node MongoDB JavaScript Full Stack Developer",
          }),
        }
      );

      const analyzeData =
        await analyzeResponse.json();

      console.log(analyzeData);

      setResult(analyzeData);

      alert("Resume Analyzed");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Your Resumes</h1>

      <input
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
      />

      <br />
      <br />

      <button onClick={handleUpload}>
        Upload Resume
      </button>

      <br />
      <br />

      {result && (
        <div>
          <h2>ATS Score</h2>

          <p>
            {result.atsScore}
          </p>
        </div>
      )}
    </div>
  );
}

export default YourResumes;