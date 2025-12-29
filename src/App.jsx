import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Admindashboard from "./Components/Admindashboard";
import Employeedashboard from "./Components/Employeedashboard";
import JobseekerDashboard from "./Components/JobseekerDashboard";
import ProtectedRoute from "./ProtectedRoute";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      <Route 
        path="/admin-dashboard" 
        element={
          <ProtectedRoute allowedRole="admin">
            <Admindashboard />
          </ProtectedRoute>
        } 
      />
      
      <Route 
        path="/employee-dashboard" 
        element={
          <ProtectedRoute allowedRole="employee">
            <Employeedashboard />
          </ProtectedRoute>
        } 
      />
      
      <Route 
        path="/jobseeker-dashboard" 
        element={
          <ProtectedRoute allowedRole="jobseeker">
            <JobseekerDashboard />
          </ProtectedRoute>
        } 
      />
    </Routes>
  );
}