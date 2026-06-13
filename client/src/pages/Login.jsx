import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const API =
          import.meta.env.VITE_API_URL;

        const response = await axios.post(
          `${API}/api/auth/login`,
          formData
        );

      localStorage.setItem(
        "token",
        response.data.token
      );

      alert("Login Success");

      navigate("/dashboard");
    } catch (error) {
      console.log(error);

      if (error.response) {
        alert(
          error.response.data.message
        );
      } else {
        alert(
          "Cannot connect to backend server"
        );
      }
    }
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="password"
          name=""
          placeholder="Password"
          onChange={handleChange}
        />

        <br />
        <br />

        <button type="submit">
          Login
        </button>
      </form>

      <br />

      <Link to="/register">
        New User? Register
      </Link>
    </div>
  );
}

export default Login;