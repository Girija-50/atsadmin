import { useState } from "react";
import axios from "axios";

function LinkedInSEO() {

  const [role, setRole] =
    useState("");

  const [result, setResult] =
    useState(null);

  const generateSEO =
    async () => {

      try {

        const response =
          await axios.post(
            "http://localhost:5000/api/linkedin/seo",
            { role }
          );

        setResult(
          response.data.result
        );

      } catch (error) {

        console.log(error);

        alert("Error");

      }
    };

  return (
    <div>

      <h1>
        LinkedIn SEO Optimizer
      </h1>

      <input
        type="text"
        placeholder="Enter Role"
        value={role}
        onChange={(e) =>
          setRole(e.target.value)
        }
      />

      <button
        onClick={generateSEO}
      >
        Optimize
      </button>

      {result && (

        <div>

          <h2>
            Visibility Score:
            {result.visibilityScore}
          </h2>

          <h2>Keywords</h2>

          <ul>
            {result.keywords.map(
              (item, index) => (
                <li key={index}>
                  {item}
                </li>
              )
            )}
          </ul>

          <h2>
            Recruiter Search Terms
          </h2>

          <ul>
            {result.recruiterSearchTerms.map(
              (item, index) => (
                <li key={index}>
                  {item}
                </li>
              )
            )}
          </ul>

          <h2>
            Trending Skills
          </h2>

          <ul>
            {result.trendingSkills.map(
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

export default LinkedInSEO;