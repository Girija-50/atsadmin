import { useState } from "react";
import axios from "axios";

function SalaryPredictor() {
  const [skills, setSkills] = useState("");
  const [experience, setExperience] =
    useState("");

  const [location, setLocation] =
    useState("");

  const [salary, setSalary] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const handlePredict =
    async () => {
      try {
        setLoading(true);

        const response =
          await axios.post(
            "http://localhost:5000/api/salary/predict",
            {
              skills,
              experience,
              location,
            }
          );

        setSalary(
          response.data.salary
        );

        setLoading(false);
      } catch (error) {
        console.log(error);

        setLoading(false);

        alert(
          "Salary Prediction Failed"
        );
      }
    };

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "50px auto",
        padding: "20px",
      }}
    >
      <h1>
        AI Salary Predictor
      </h1>

      <br />

      <input
        type="text"
        placeholder="Skills (React Node MongoDB)"
        value={skills}
        onChange={(e) =>
          setSkills(e.target.value)
        }
        style={{
          width: "100%",
          padding: "10px",
        }}
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Experience (Years)"
        value={experience}
        onChange={(e) =>
          setExperience(
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

      <input
        type="text"
        placeholder="Location (Chennai)"
        value={location}
        onChange={(e) =>
          setLocation(e.target.value)
        }
        style={{
          width: "100%",
          padding: "10px",
        }}
      />

      <br />
      <br />

      <button
        onClick={handlePredict}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Predict Salary
      </button>

      <br />
      <br />

      {loading && (
        <h3>
          Predicting Salary...
        </h3>
      )}

      {salary && (
        <div
          style={{
            border:
              "1px solid #ccc",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h2>
            Salary Prediction
          </h2>

          <p>
            <strong>
              Minimum:
            </strong>{" "}
            {salary.minimum}
          </p>

          <p>
            <strong>
              Average:
            </strong>{" "}
            {salary.average}
          </p>

          <p>
            <strong>
              Maximum:
            </strong>{" "}
            {salary.maximum}
          </p>
        </div>
      )}
    </div>
  );
}

export default SalaryPredictor;