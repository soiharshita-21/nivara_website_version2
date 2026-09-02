import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { User, Lock, AlertCircle, Eye, EyeOff, LogIn } from "lucide-react";
import "./AdminLogin.css";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || 'http://localhost:5001').replace(/\/$/, '');

      // POST to our real Backend API
      const response = await axios.post(`${apiBaseUrl}/api/login`, {
        username,
        password
      });

      // If successful, the server returns a JWT Token
      const { token } = response.data;

      setTimeout(() => {
        setLoading(false);
        // Set BOTH flags required for the dashboard
        sessionStorage.setItem("isAdminLoggedIn", "true");
        sessionStorage.setItem("adminToken", token);

        // Navigate to dashboard
        navigate("/admin/dashboard", { replace: true });
      }, 500);

    } catch (err) {
      setTimeout(() => {
        setLoading(false);
        setError(err.response?.data?.message || "Invalid credentials or Server Error");
      }, 500);
    }
  };

  return (
    <div className="admin-login-page">
      <div className="login-card animate-pop-up">
        <div className="login-header">
          <div className="logo-icon-container">
            <LogIn size={40} className="login-icon" />
          </div>
          <h1>Admin Portal</h1>
          <p>Login to access administrative features</p>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          {error && (
            <div className="error-message">
              <AlertCircle size={18} />
              <span>{error}</span>
            </div>
          )}

          <div className="input-group">
            <label htmlFor="username">Username</label>
            <div className="input-field">
              <User size={20} className="field-icon" />
              <input
                type="text"
                id="username"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="input-field">
              <Lock size={20} className="field-icon" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                tabIndex="-1"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? <span className="loader"></span> : "Login"}
          </button>
        </form>

        <div className="login-footer">
          <p>© 2024 Nivara Home Finance. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
