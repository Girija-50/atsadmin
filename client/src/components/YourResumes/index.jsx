import { useState } from "react";

function YourResumes() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle File Selection
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // Upload + Analyze Resume
  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a PDF resume");
      return;
    }

    try {
      setLoading(true);

      // Create FormData
      const formData = new FormData();
      formData.append("resume", selectedFile);

      // Upload Resume API
      const uploadResponse = await fetch(
        `${import.meta.env.VITE_API_URL}/resume/upload`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: formData,
        }
      );

      const uploadData = await uploadResponse.json();

      console.log("Upload Response:", uploadData);

      // Check upload success
      if (!uploadResponse.ok) {
        throw new Error(uploadData.message || "Resume upload failed");
      }

      // Analyze Resume API
      const analyzeResponse = await fetch(
        `${import.meta.env.VITE_API_URL}/resume/analyze`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            resumeText: uploadData.text,
            jobDescription:
              "React Node MongoDB JavaScript Full Stack Developer",
          }),
        }
      );

      const analyzeData = await analyzeResponse.json();

      console.log("Analyze Response:", analyzeData);

      // Check analyze success
      if (!analyzeResponse.ok) {
        throw new Error(analyzeData.message || "Resume analysis failed");
      }

      setResult(analyzeData);

      alert("Resume analyzed successfully");
    } catch (error) {
      console.log(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Your Resumes</h1>

      <input
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
      />

      <br />
      <br />

      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Analyzing..." : "Upload Resume"}
      </button>

      <br />
      <br />

      {result && (
        <div
          style={{
            border: "1px solid gray",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h2>ATS Analysis Result</h2>

          <p>
            <strong>ATS Score:</strong> {result.atsScore}
          </p>

          {result.feedback && (
            <div>
              <strong>Feedback:</strong>
              <p>{result.feedback}</p>
            </div>
          )}

          {result.missingSkills && (
            <div>
              <strong>Missing Skills:</strong>

              <ul>
                {result.missingSkills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default YourResumes;