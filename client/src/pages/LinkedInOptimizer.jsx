import { useState } from "react";
import axios from "axios";

function LinkedInOptimizer() {

  const [headline, setHeadline] =
    useState("");

  const [about, setAbout] =
    useState("");

  const [skills, setSkills] =
    useState("");

  const [experience,
    setExperience] =
    useState("");

  const [certifications,
    setCertifications] =
    useState("");

  const [result, setResult] =
    useState(null);

  const checkATS =
    async () => {

      try {

        const response =
          await axios.post(
            "http://localhost:5000/api/linkedin/ats",
            {
              headline,
              about,
              skills:
                skills.split(","),
              certifications:
                certifications.split(","),
              experience
            }
          );

        setResult(
          response.data.result
        );

      } catch (error) {

        console.log(error);

      }

    };

  const copyResult = () => {

    navigator.clipboard.writeText(
      JSON.stringify(
        result,
        null,
        2
      )
    );

    alert("Copied");

  };

  const downloadResult = () => {

    const blob =
      new Blob(
        [
          JSON.stringify(
            result,
            null,
            2
          )
        ],
        {
          type:
            "text/plain"
        }
      );

    const url =
      URL.createObjectURL(blob);

    const a =
      document.createElement("a");

    a.href = url;

    a.download =
      "linkedin-ats.txt";

    a.click();

  };

  return (

    <div>

      <h1>
        LinkedIn Optimizer
      </h1>

      <input
        placeholder="Headline"
        value={headline}
        onChange={(e)=>
          setHeadline(
            e.target.value
          )
        }
      />

      <br /><br />

      <textarea
        placeholder="About"
        value={about}
        onChange={(e)=>
          setAbout(
            e.target.value
          )
        }
      />

      <br /><br />

      <input
        placeholder="Skills"
        value={skills}
        onChange={(e)=>
          setSkills(
            e.target.value
          )
        }
      />

      <br /><br />

      <input
        placeholder="Certifications"
        value={certifications}
        onChange={(e)=>
          setCertifications(
            e.target.value
          )
        }
      />

      <br /><br />

      <textarea
        placeholder="Experience"
        value={experience}
        onChange={(e)=>
          setExperience(
            e.target.value
          )
        }
      />

      <br /><br />

      <button
        onClick={checkATS}
      >
        Check ATS
      </button>

      {result && (

        <div>

          <h2>
            ATS Score:
            {result.atsScore}
          </h2>

          <h3>
            Missing Items
          </h3>

          <ul>

            {result.missing.map(
              (
                item,
                index
              ) => (
                <li key={index}>
                  {item}
                </li>
              )
            )}

          </ul>

          <button
            onClick={
              copyResult
            }
          >
            Copy Result
          </button>

          <button
            onClick={
              downloadResult
            }
          >
            Download TXT
          </button>

        </div>

      )}

    </div>

  );

}

export default LinkedInOptimizer;