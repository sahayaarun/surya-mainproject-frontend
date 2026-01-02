import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import EmployeeDashboard from "./Components/EmployeeDashboard";
import AdminDasboard from "./Components/AdminDasboard";
import JobseekerDashboard from "./Components/JobseekerDashboard";
import ProtectedRoute from "./ProtectedRoute";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      <Route 
        path="/admin-dashboard" 
        element={
          <ProtectedRoute allowedRole="admin">
            <AdminDasboard/>
          </ProtectedRoute>
        } 
      />
      
      <Route 
        path="/employee-dashboard" 
        element={
          <ProtectedRoute allowedRole="employee">
            <EmployeeDashboard />
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