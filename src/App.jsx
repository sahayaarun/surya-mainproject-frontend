import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import AdminTest from "./Components/AdminTest";
import EmployeeTest from "./Components/EmployeeTest";
import JobseekerDashboard from "./Components/JobseekerDashboard";
import ProtectedRoute from "./ProtectedRoute";

export default function App() {
  return (
    <Routes>
    
      <Route path="/login" element={<Login  />} />
      <Route path="/register" element={<Register />} />
      
      
      <Route 
        path="/admin-test" 
        element={
          <ProtectedRoute allowedRole="admin">
            <AdminTest />
          </ProtectedRoute>
        } 
      />
      
      <Route 
        path="/employee-test" 
        element={
          <ProtectedRoute allowedRole="employee">
            <EmployeeTest />
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

    
      <Route path="*" element={<div>NO PADE(404)</div>} />
    </Routes>
  );
}