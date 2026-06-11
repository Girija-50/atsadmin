import { useState } from "react";
import API from "../services/api";

function ProjectGenerator() {

  const [projectName, setProjectName] =
    useState("");

  const [techStack, setTechStack] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [bullets, setBullets] =
    useState([]);

  const generateDescription =
    async () => {

      if (
        !projectName ||
        !techStack
      ) {
        alert(
          "Enter Project Name and Tech Stack"
        );
        return;
      }

      try {

        setLoading(true);

        const response =
          await API.post(
            "/project/generate",
            {
              projectName,
              techStack,
            }
          );

        setBullets(
          response.data.result.bullets
        );

      } catch (error) {

        console.log(error);

        alert(
          "Generation Failed"
        );

      } finally {
        setLoading(false);
      }
    };

  const copyToClipboard =
    () => {

      const text =
        bullets.join("\n");

      navigator.clipboard.writeText(
        text
      );

      alert(
        "Copied Successfully"
      );
    };

  const downloadTXT =
    () => {

      const content =
        bullets.join("\n");

      const blob =
        new Blob(
          [content],
          {
            type:
              "text/plain",
          }
        );

      const url =
        window.URL.createObjectURL(
          blob
        );

      const link =
        document.createElement(
          "a"
        );

      link.href = url;

      link.download =
        "project-description.txt";

      link.click();

      window.URL.revokeObjectURL(
        url
      );
    };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "auto",
        padding: "20px",
      }}
    >
      <h1>
        Project Description Generator
      </h1>

      <br />

      <input
        type="text"
        placeholder="Project Name"
        value={projectName}
        onChange={(e) =>
          setProjectName(
            e.target.value
          )
        }
        style={{
          width: "100%",
          padding: "10px",
        }}
      />

      <br />
      <br />

      <textarea
        rows="4"
        placeholder="Tech Stack"
        value={techStack}
        onChange={(e) =>
          setTechStack(
            e.target.value
          )
        }
        style={{
          width: "100%",
          padding: "10px",
        }}
      />

      <br />
      <br />

      <button
        onClick={
          generateDescription
        }
      >
        {loading
          ? "Generating..."
          : "Generate"}
      </button>

      <button
        onClick={
          copyToClipboard
        }
        style={{
          marginLeft: "10px",
        }}
      >
        Copy
      </button>

      <button
        onClick={downloadTXT}
        style={{
          marginLeft: "10px",
        }}
      >
        Download TXT
      </button>

      <button
        onClick={
          generateDescription
        }
        style={{
          marginLeft: "10px",
        }}
      >
        Regenerate
      </button>

      <br />
      <br />

      {bullets.length > 0 && (
        <div>
          <h2>
            Generated Description
          </h2>

          <ul>
            {bullets.map(
              (
                bullet,
                index
              ) => (
                <li
                  key={
                    index
                  }
                >
                  {bullet}
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProjectGenerator;