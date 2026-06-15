import axios from "axios";

const API = axios.create({
  baseURL: "https://ats-resume-backend-3y82.onrender.com"
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default API;