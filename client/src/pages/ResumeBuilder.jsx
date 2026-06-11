import { useState } from "react";
import exportPDF from "../utils/exportPDF";
import { useParams } from "react-router-dom";
import {
  saveResume,
} from "../services/resumeBuilderApi";

function ResumeBuilder() {
  const { type } = useParams();

  const [step, setStep] = useState(1);

  const [resumeData, setResumeData] = useState({
    name: "",
    email: "",
    phone: "",
    summary: "",
    education: "",
    skills: "",
    projects: "",
    experience: "",
    certifications: "",
  });

  const handleChange = (e) => {
    setResumeData({
      ...resumeData,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = () => {
    if (step < 7) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  const handleSaveResume =
  async () => {
    try {
      const response =
        await saveResume({
          userId:
            localStorage.getItem(
              "userId"
            ),

          templateType: type,

          ...resumeData,
        });

      alert(
        response.data.message
      );
    } catch (error) {
      console.log(error);

      alert(
        "Failed to Save Resume"
      );
    }
  };
  return (
  <div
    style={{
      display: "flex",
      gap: "30px",
      padding: "20px",
    }}
  >
    <div
      style={{
        flex: 1,
      }}
    ></div>

  
      <h1>Resume Builder Wizard</h1>

      <h2>
        Selected Template :
        {" "}
        {type?.toUpperCase()}
      </h2>

      <h3>
        Step {step} of 7
      </h3>

      {/* STEP 1 */}

      {step === 1 && (
        <div>
          <h2>Personal Information</h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={resumeData.name}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
            }}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={resumeData.email}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
            }}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={resumeData.phone}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
            }}
          />
        </div>
      )}

      {/* STEP 2 */}

      {step === 2 && (
        <div>
          <h2>Professional Summary</h2>

          <textarea
            rows="6"
            name="summary"
            placeholder="Write your summary..."
            value={resumeData.summary}
            onChange={handleChange}
            style={{
              width: "100%",
            }}
          />
        </div>
      )}

      {/* STEP 3 */}

      {step === 3 && (
        <div>
          <h2>Education</h2>

          <textarea
            rows="6"
            name="education"
            placeholder="Enter Education Details"
            value={resumeData.education}
            onChange={handleChange}
            style={{
              width: "100%",
            }}
          />
        </div>
      )}

      {/* STEP 4 */}

      {step === 4 && (
        <div>
          <h2>Skills</h2>

          <textarea
            rows="6"
            name="skills"
            placeholder="Java, React, Node.js..."
            value={resumeData.skills}
            onChange={handleChange}
            style={{
              width: "100%",
            }}
          />
        </div>
      )}

      {/* STEP 5 */}

      {step === 5 && (
        <div>
          <h2>Projects</h2>

          <textarea
            rows="6"
            name="projects"
            placeholder="Project Details"
            value={resumeData.projects}
            onChange={handleChange}
            style={{
              width: "100%",
            }}
          />
        </div>
      )}

      {/* STEP 6 */}

      {step === 6 && (
        <div>
          <h2>Experience</h2>

          <textarea
            rows="6"
            name="experience"
            placeholder="Work Experience"
            value={resumeData.experience}
            onChange={handleChange}
            style={{
              width: "100%",
            }}
          />
        </div>
      )}

      {/* STEP 7 */}

      {step === 7 && (
        <div>
          <h2>Certifications</h2>

          <textarea
            rows="6"
            name="certifications"
            placeholder="Certifications"
            value={resumeData.certifications}
            onChange={handleChange}
            style={{
              width: "100%",
            }}
          />

          <hr />

          
        </div>
      )}

      <br />

      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        {step > 1 && (
          <button onClick={prevStep}>
            Previous
          </button>
        )}

        {step < 7 && (
          <button onClick={nextStep}>
            Next
          </button>
        )}

        {step === 7 && (
        <>
          <button
            onClick={handleSaveResume}
          >
            Save Resume
          </button>

          <button
            onClick={() =>
              exportPDF(resumeData)
            }
            style={{
              marginLeft: "10px",
            }}
          >
            Download PDF
          </button>
        </>
      )}
        </div>

<div
  style={{
    flex: 1,
    position: "sticky",
    top: "20px",
  }}
>
  <h2>Live Resume Preview</h2>

  <ResumePreview
    resumeData={resumeData}
  />
</div>

</div>
);
}

export default ResumeBuilder;