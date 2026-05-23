import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import YourResumes from "./components/YourResumes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/resumes" element={<YourResumes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;