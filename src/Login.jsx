import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Link 

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password || !role) {
      alert("All fields are required");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post("https://surya-mainproject-backend-production.up.railway.app/api/auth/login", {email, password, role});

      if (res.data && res.data.role) {
        alert("Login Successful");
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("role", res.data.role);

        switch (res.data.role) {
          case "admin": navigate("/admin-dashboard"); break;
          case "jobseeker": navigate("/jobseeker-dashboard"); break;
          case "employee": navigate("/employee-dashboard"); break;
          default: alert("Invalid role");
        }
      }
    } catch (error) {
      alert(error.response?.data?.message || error.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')" }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold text-center mb-6">Login Page</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" className="w-full border p-2 mb-4 rounded focus:ring-2 focus:ring-indigo-400 outline-none" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" className="w-full border p-2 mb-4 rounded focus:ring-2 focus:ring-indigo-400 outline-none" value={password} onChange={(e) => setPassword(e.target.value)} />
          <select className="w-full border p-2 mb-6 rounded focus:ring-2 focus:ring-indigo-400 outline-none" value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="jobseeker">Job Seeker</option>
            <option value="employee">Employee</option>
          </select>
          <button type="submit" className={`w-full bg-indigo-600 text-white py-2 rounded ${loading ? "opacity-50" : ""}`} disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="text-indigo-600 font-bold hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}