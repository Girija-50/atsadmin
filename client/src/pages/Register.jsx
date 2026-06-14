import { useState } from "react";
import axios from "axios";
import {
  useNavigate,
} from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      name: "",
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

        await axios.post(
          `${API}/api/auth/register`,
          formData
        );

      alert("Registration successful");

      navigate("/");
    } catch (error) {
  console.log("REGISTER ERROR:", error);

  res.status(500).json({
    success: false,
    error: error.message
  });
}
  };

  return (
    <div>
      <h1>Register</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />

        <br />
        <br />

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
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <br />
        <br />

        <button type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;