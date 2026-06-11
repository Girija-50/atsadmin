import { useState } from "react";

import axios from "axios";

import { useDropzone } from "react-dropzone";


function ResumeAnalyzer() {
  const [file, setFile] =
    useState(null);

  const [analysis, setAnalysis] =
    useState("");

  const [loading, setLoading] =
    useState(false);


  // Drag & Drop
  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };


  const { getRootProps, getInputProps } =
    useDropzone({
      onDrop,
      accept: {
        "application/pdf": [".pdf"],
      },
    });


  // Upload Resume
  const handleUpload = async () => {
    try {
      setLoading(true);

      const formData =
        new FormData();

      formData.append(
        "resume",
        file
      );

      // Upload PDF
      const uploadResponse =
        await axios.post(
          "http://localhost:5000/api/resume/upload",
          formData
        );

      const resumeText =
        uploadResponse.data.text;

      // Analyze Resume
      const analyzeResponse =
        await axios.post(
          "http://localhost:5000/api/resume/analyze",
          {
            resumeText,

            jobDescription:
              "React Node.js MongoDB Full Stack Developer",
          }
        );

      setAnalysis(
        analyzeResponse.data.analysis
      );

      setLoading(false);
    } catch (error) {
      console.log(error);

      setLoading(false);
    }
  };


  return (
    <div
      style={{
        padding: "30px",
      }}
    >
      <h1>
        AI Resume Analyzer
      </h1>


      {/* Drag Area */}
      <div
        {...getRootProps()}
        style={{
          border:
            "2px dashed gray",

          padding: "40px",

          marginBottom: "20px",

          cursor: "pointer",
        }}
      >
        <input
          {...getInputProps()}
        />

        <p>
          Drag & Drop Resume PDF
          Here
        </p>
      </div>


      {/* Selected File */}
      {file && (
        <p>
          Selected:
          {file.name}
        </p>
      )}


      {/* Upload Button */}
      <button onClick={handleUpload}>
        Analyze Resume
      </button>


      {/* Loading */}
      {loading && (
        <p>
          AI analyzing resume...
        </p>
      )}


      {/* AI Result */}
      {analysis && (
        <div
          style={{
            marginTop: "30px",
            whiteSpace:
              "pre-wrap",
          }}
        >
          <h2>
            AI ATS Analysis
          </h2>

          <p>{analysis}</p>
        </div>
      )}
    </div>
  );
}


export default ResumeAnalyzer;
