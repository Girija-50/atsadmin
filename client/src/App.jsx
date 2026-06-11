import {
  Routes,
  Route,
} from "react-router-dom";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import ResumeTemplates from "./pages/ResumeTemplates";
import ResumeBuilder from "./pages/ResumeBuilder";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProjectGenerator
from "./pages/ProjectGenerator";
import ProtectedRoute from "./components/ProtectedRoute";
import CareerRoadmap
from "./pages/CareerRoadmap";
import SalaryPredictor from "./pages/SalaryPredictor";
import CareerGuidance
from "./pages/CareerGuidance";
import LearningRecommendation
from "./pages/LearningRecommendation";
import LinkedInSEO
from "./pages/LinkedInSEO";
import LinkedInOptimizer
from "./pages/LinkedInOptimizer";
import CoverLetterBuilder
from "./pages/CoverLetterBuilder";

function App() {
  return (
    <Routes>
      {/* Login Page */}
      <Route
        path="/"
        element={<Login />}
      />

      {/* Register Page */}
      <Route
        path="/register"
        element={<Register />}
      />

      {/* Protected Dashboard */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/project-generator"
        element={
      <ProjectGenerator />
      }
      />
      <Route
        path="/builder/:type"
        element={<ResumeBuilder />}
      />
      <Route
        path="/templates"
        element={<ResumeTemplates />}
      />

      {/* Resume Analyzer */}
      <Route
        path="/analyze"
        element={<ResumeAnalyzer />}
      />
      <Route
        path="/career-roadmap"
        element={<CareerRoadmap />}
      />
      <Route
        path="/salary-predictor"
        element={<SalaryPredictor />}
      />
      <Route
        path="/career-guidance"
        element={<CareerGuidance />}
      />
      <Route
        path="/learning-recommendation"
        element={<LearningRecommendation />}
      />
      <Route
        path="/learning"
        element={<LearningRecommendation />}
      />
      <Route
        path="/linkedin-seo"
        element={<LinkedInSEO />}
      />
      <Route
        path="/linkedin"
        element={
        <LinkedInOptimizer />}
      />
      <Route
        path="/cover-letter"
        element={
        <CoverLetterBuilder />}
      />
    </Routes>
  );
}

export default App;