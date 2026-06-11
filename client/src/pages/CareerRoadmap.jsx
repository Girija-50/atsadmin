import { useState } from "react";
import axios from "axios";

function CareerRoadmap() {

  const [
    currentRole,
    setCurrentRole,
  ] = useState("");

  const [
    targetRole,
    setTargetRole,
  ] = useState("");

  const [
    roadmap,
    setRoadmap,
  ] = useState([]);

  const generateRoadmap =
    async () => {
      try {

        const res =
          await axios.post(
            "http://localhost:5000/api/roadmap/generate",
            {
              currentRole,
              targetRole,
            }
          );

        const data =
          JSON.parse(
            res.data.roadmap
          );

        setRoadmap(
          data.roadmap
        );

      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div>

      <h1>
        Career Roadmap Generator
      </h1>

      <input
        placeholder="Current Role"
        value={currentRole}
        onChange={(e) =>
          setCurrentRole(
            e.target.value
          )
        }
      />

      <br />
      <br />

      <input
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
        onClick={
          generateRoadmap
        }
      >
        Generate Roadmap
      </button>

      <br />
      <br />

      {roadmap.map(
        (item, index) => (
          <div key={index}>
            <h3>
              {item.month}
            </h3>

            <p>
              {item.skill}
            </p>
          </div>
        )
      )}

    </div>
  );
}

export default CareerRoadmap;