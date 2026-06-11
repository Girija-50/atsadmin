import axios from "axios";

const API_URL =
  "http://localhost:5000/api/builder";

export const saveResume =
  async (resumeData) => {
    return axios.post(
      `${API_URL}/save-resume`,
      resumeData
    );
  };