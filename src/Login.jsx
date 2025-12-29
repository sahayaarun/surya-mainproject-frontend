import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  // State variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submit

    //  1. Empty check
    if (!email || !password || !role) {
      alert("All fields are required");
      return;
    }

    try {
      setLoading(true);

      //  2. API call
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password, role }
      );

      //  3. Success check
      if (res.data && res.data.role) {
        alert("Login Successful");

        //  THIS IS THE ONLY IMPORTANT ADD 
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("role", res.data.role);
        // ADD END 

        //  4. Role-based redirect
        switch (res.data.role) {
          case "admin":
            navigate("/admin-dashboard");
            break;
          case "jobseeker":
            navigate("/jobseeker-dashboard");
            break;
          case "employee":
            navigate("/employee-dashboard");
            break;
          default:
            alert("Invalid role");
        }
      }
    } catch (error) {
      // 5. Improved error handling
      alert(error.response?.data?.message || error.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')",
    }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold text-center mb-6">Login Page</h2>

        <form onSubmit={handleLogin}>
          {/* Email */}
          <label className="block mb-1 font-medium" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full border p-2 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />

          {/* Password */}
          <label className="block mb-1 font-medium" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="w-full border p-2 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />

          {/* Role */}
          <label className="block mb-1 font-medium" htmlFor="role">
            Select Role
          </label>
          <select
            id="role"
            className="w-full border p-2 mb-6 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="jobseeker">Job Seeker</option>
            <option value="employee">Employee</option>
          </select>

          {/* Login Button */}
          <button
            type="submit"
            className={`w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}