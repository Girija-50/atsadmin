import { useNavigate }
from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");


  const handleLogin = async () => {

    try {

      const response = await fetch(
        "http://localhost:5000/auth/login",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
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

      localStorage.setItem(
        "token",
        data.token
      );

      alert("Login Success");
      navigate("/resumes");

    } catch (error) {

      console.log(error);

      alert("Failed to fetch");

    }
  };


  return (
    <div>

      <h1>Login</h1>

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
        onClick={handleLogin}
      >
        Login
      </button>

    </div>
  );
}

export default Login;