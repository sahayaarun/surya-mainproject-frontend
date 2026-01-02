import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRole }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // 🔴 token dont login page
  if (!token) {
    return <Navigate to="/" replace />;
  }

  // 🔴 role mismatch have login page
  if (
    allowedRole &&
    role &&
    role.toLowerCase() !== allowedRole.toLowerCase()
  ) {
    return <Navigate to="/" replace />;
  }

  // ✅ correct user
  return children;
};

export default ProtectedRoute;