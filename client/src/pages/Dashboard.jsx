import { useState } from "react";
import { Link } from "react-router-dom";

import API from "../services/api";


import ResumeComparison from "../components/ResumeComparison";

import UploadResume from "../components/UploadResume";

import ATSCard from "../components/ATSCard";

import MissingKeywords from "../components/MissingKeywords";

import Suggestions from "../components/Suggestions";

import ScoreChart from "../components/ScoreChart";
import SkillGapCard from "../components/SkillGapCard";

import MissingSkills from "../components/MissingSkills";
const Dashboard = () => {

  const [
    analysis,
    setAnalysis,
  ] = useState(null);
  const [
    skillGap,
    setSkillGap,
  ] = useState(null);

  const [
    tailoredResult,
    setTailoredResult,
  ] = useState(null);

  const [
    resumeText,
    setResumeText,
  ] = useState("");

  const [
    jobDescription,
    setJobDescription,
  ] = useState("");

  const uploadResume =
    async (file) => {

      const formData =
        new FormData();

      formData.append(
        "resume",
        file
      );

      try {

        const uploadResponse =
          await API.post(
            "/resume/upload",
            formData
          );

        const resumeText =
          uploadResponse.data.text;

        const enteredJD =
          prompt(
            "Enter Job Description"
          );

        setResumeText(
          resumeText
    );
        setJobDescription(
          enteredJD
        );

        const analysisResponse =
          await API.post(
            "/resume/analyze",
            {
              resumeText:
                resumeText,
              jobDescription:
                jobDescription,
            }
          );

        const result =
          JSON.parse(
            analysisResponse
              .data.analysis
          );

        setAnalysis(
          result
        );
        const skillGapResponse =
          await API.post(
            "/skill-gap/analyze",
            {
              resumeText,
              jobDescription,
            }
        );

        const skillGapResult =
          JSON.parse(
            skillGapResponse.data.result
        );

        setSkillGap(
          skillGapResult
      );

      } catch (error) {

        console.log(error);

      }
    };

  const tailorResume =
    async () => {

      try {

        const response =
          await API.post(
            "/tailor/tailor",
            {
              resumeText,
              jobDescription,
            }
          );

        setTailoredResult(
          response.data.result
        );

        alert(
          "Resume Tailored Successfully"
        );

      } catch (error) {

        console.log(error);

        alert(
          "Tailoring Failed"
        );
      }
    };

  return (
    <div>

      <h1>
  ATS Resume Analyzer
</h1>

<div
  style={{
    display: "flex",
    gap: "20px",
    marginBottom: "20px",
  }}
>
  <Link to="/project-generator">
    Project Generator
  </Link>

  <Link to="/salary-predictor">
    Salary Predictor
  </Link>
  <Link to="/learning-recommendation">
    Learning Recommendation AI
  </Link>
  <Link to="/learning">
  <button>
  Learning Recommendation AI
  </button>
  </Link>
  <Link to="/linkedin-seo">
  <button>
    LinkedIn SEO
  </button>
  </Link>
  <Link to="/linkedin">
  <button>
    LinkedIn Optimizer
  </button>
  </Link>
  <Link to="/cover-letter">
  <button>
    Cover Letter Builder
  </button>
  </Link>
  </div>

      {analysis && (
        <>

          <ATSCard
            title="ATS Score"
            value={
              analysis.atsScore
            }
          />

          <ATSCard
            title="Match %"
            value={`${analysis.matchPercentage}%`}
          />

          <ScoreChart
            score={
              analysis.atsScore
            }
          />

          <MissingKeywords
            keywords={
              analysis.missingKeywords
            }
          />

          <Suggestions
            suggestions={
              analysis.improvements
            }
          />

          <br />

          <button
            onClick={
              tailorResume
            }
          >
            AI Tailor Resume
          </button>

          {
            tailoredResult && (
              <ResumeComparison
                originalResume={
                  tailoredResult.originalResume
                }
                tailoredResume={
                  tailoredResult.tailoredResume
                }
                addedKeywords={
                  tailoredResult.addedKeywords
                }
                removedWords={
                  tailoredResult.removedWords
                }
                missingSkills={
                  tailoredResult.missingSkills
                }
              />
            )
          }

        </>
      )}
      {
  skillGap && (
    <>
      <SkillGapCard
        score={
          skillGap.skillGapScore
        }
      />

      <MissingSkills
        skills={
          skillGap.missingSkills
        }
      />
    </>
  )
}

    </div>
  );
};

export default Dashboard;