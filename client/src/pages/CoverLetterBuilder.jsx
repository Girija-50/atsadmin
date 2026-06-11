import { useState } from "react";
import axios from "axios";

function CoverLetterBuilder() {

const [name, setName] = useState("");
const [role, setRole] = useState("");
const [company, setCompany] = useState("");
const [skills, setSkills] = useState("");

const [coverLetter, setCoverLetter] =
useState("");

const [template, setTemplate] =
useState("Fresher");

const [jobDescription,
setJobDescription] =
useState("");

const [history, setHistory] =
useState([]);

const generateCoverLetter =
async () => {
try {

    const response =
      await axios.post(
        "http://localhost:5000/api/cover-letter/generate",
        {
          name,
          role,
          company,
          skills,
        }
      );

    setCoverLetter(
      response.data.coverLetter
    );

  } catch (error) {

    console.log(error);

    alert(
      "Failed to Generate Cover Letter"
    );

  }
};

const generateJobSpecific =
async () => {

  try {

    const response =
      await axios.post(
        "http://localhost:5000/api/cover-letter/job-specific",
        {
          name,
          role,
          company,
          skills,
          template,
          jobDescription,
        }
      );

    setCoverLetter(
      response.data.coverLetter
    );

  } catch (error) {

    console.log(error);

    alert(
      "Job Specific Generation Failed"
    );

  }

};

const saveCoverLetter =
async () => {

  try {

    await axios.post(
      "http://localhost:5000/api/cover-letter/save",
      {
        name,
        role,
        company,
        coverLetter,
        template,
      }
    );

    alert(
      "Cover Letter Saved"
    );

  } catch (error) {

    console.log(error);

    alert(
      "Save Failed"
    );

  }

};

const loadHistory =
async () => {

  try {

    const response =
      await axios.get(
        "http://localhost:5000/api/cover-letter/history"
      );

    setHistory(
      response.data.history
    );

  } catch (error) {

    console.log(error);

  }

};

const copyText = () => {

navigator.clipboard.writeText(
  coverLetter
);

alert(
  "Copied Successfully"
);

};

const downloadTXT = () => {

const blob = new Blob(
  [coverLetter],
  {
    type: "text/plain",
  }
);

const link =
  document.createElement("a");

link.href =
  URL.createObjectURL(blob);

link.download =
  "cover-letter.txt";

link.click();

};

return (

<div
  style={{
    padding: "20px",
  }}
>

  <h1>
    AI Cover Letter Builder
  </h1>

  <input
    type="text"
    placeholder="Your Name"
    value={name}
    onChange={(e) =>
      setName(e.target.value)
    }
  />

  <br />
  <br />

  <input
    type="text"
    placeholder="Job Role"
    value={role}
    onChange={(e) =>
      setRole(e.target.value)
    }
  />

  <br />
  <br />

  <input
    type="text"
    placeholder="Company Name"
    value={company}
    onChange={(e) =>
      setCompany(e.target.value)
    }
  />

  <br />
  <br />

  <textarea
    placeholder="Skills"
    rows="4"
    cols="50"
    value={skills}
    onChange={(e) =>
      setSkills(e.target.value)
    }
  />

  <br />
  <br />

  <h3>
    Select Template
  </h3>

  <select
    value={template}
    onChange={(e) =>
      setTemplate(
        e.target.value
      )
    }
  >
    <option>
      Fresher
    </option>

    <option>
      Internship
    </option>

    <option>
      Professional
    </option>

  </select>

  <br />
  <br />

  <textarea
    rows="6"
    cols="70"
    placeholder="Paste Job Description"
    value={jobDescription}
    onChange={(e) =>
      setJobDescription(
        e.target.value
      )
    }
  />

  <br />
  <br />

  <button
    onClick={
      generateCoverLetter
    }
  >
    Generate Cover Letter
  </button>

  <button
    onClick={
      generateJobSpecific
    }
    style={{
      marginLeft: "10px",
    }}
  >
    Job Specific Generator
  </button>

  <hr />

  <h2>
    Generated Cover Letter
  </h2>

  <textarea
    rows="15"
    cols="100"
    value={coverLetter}
    readOnly
  />

  <br />
  <br />

  <button
    onClick={copyText}
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
    onClick={saveCoverLetter}
    style={{
      marginLeft: "10px",
    }}
  >
    Save Cover Letter
  </button>

  <button
    onClick={loadHistory}
    style={{
      marginLeft: "10px",
    }}
  >
    Load History
  </button>

  <hr />

  <h2>
    Cover Letter History
  </h2>

  {history.map(
    (item, index) => (
      <div
        key={index}
        style={{
          border:
            "1px solid gray",
          padding: "10px",
          marginBottom: "10px",
        }}
      >
        <h4>
          {item.role}
        </h4>

        <p>
          {item.company}
        </p>

        <button
          onClick={() =>
            setCoverLetter(
              item.coverLetter
            )
          }
        >
          Open
        </button>
      </div>
    )
  )}

</div>

);
}

export default CoverLetterBuilder;
