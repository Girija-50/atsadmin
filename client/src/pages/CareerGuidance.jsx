import { useState } from "react";
import axios from "axios";

function CareerGuidance() {
  const [atsScore, setAtsScore] =
    useState("");

  const [skills, setSkills] =
    useState("");

  const [
    targetRole,
    setTargetRole,
  ] = useState("");

  const [result, setResult] =
    useState(null);

  const generateAdvice =
    async () => {
      try {
        const response =
          await axios.post(
            "http://localhost:5000/api/career/guide",
            {
              atsScore,
              skills,
              targetRole,
            }
          );

        setResult(
          JSON.parse(
            response.data.advice
          )
        );
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div>
      <h1>
        Career Guidance AI
      </h1>

      <input
        type="number"
        placeholder="ATS Score"
        value={atsScore}
        onChange={(e) =>
          setAtsScore(
            e.target.value
          )
        }
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Skills"
        value={skills}
        onChange={(e) =>
          setSkills(
            e.target.value
          )
        }
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Target Role"
        value={targetRole}
        onChange={(e) =>
          setTargetRole(
            e.target.value
          )
        }
      />

      <br />
      <br />

      <button
        onClick={generateAdvice}
      >
        Get Guidance
      </button>

      {result && (
        <div>
          <h2>
            Expected ATS:
            {result.expectedATS}
          </h2>

          <h3>
            Recommended Skills
          </h3>

          <ul>
            {result.recommendedSkills.map(
              (item, index) => (
                <li key={index}>
                  {item}
                </li>
              )
            )}
          </ul>

          <h3>
            Projects
          </h3>

          <ul>
            {result.recommendedProjects.map(
              (item, index) => (
                <li key={index}>
                  {item}
                </li>
              )
            )}
          </ul>

          <h3>
            Certifications
          </h3>

          <ul>
            {result.certifications.map(
              (item, index) => (
                <li key={index}>
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CareerGuidance;