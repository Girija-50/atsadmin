import { useNavigate }
from "react-router-dom";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");


  const handleRegister = async () => {

    try {

      const response = await fetch(
        "http://localhost:5000/auth/register",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      const data =
        await response.json();

      console.log(data);

      if (!response.ok) {
        return alert(data.error);
      }

      alert("Register Success");
      navigate("/");

    } catch (error) {

      console.log(error);

      alert("Failed to fetch");

    }
  };


  return (
    <div>

      <h1>Register</h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <br />
      <br />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <br />
      <br />

      <button
        onClick={handleRegister}
      >
        Register
      </button>

    </div>
  );
}

export default Register;