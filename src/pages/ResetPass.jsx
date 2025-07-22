import axios from "axios";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ResetPass() {
  const navigate = useNavigate();
  const [token, setToken] = useState(""); // input token manual
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();

    if (!token) {
      alert("Please enter the reset token.");
      return;
    }
    if (newPassword.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      const { data } = await axios.post("/api/auth/reset-password", {
        token,
        newPassword: newPassword.trim(),
      });

      alert("Your password has been reset successfully.");
      navigate("/login");
    } catch (error) {
      console.error("Reset password error:", error);
      alert(error.response?.data?.message || "Failed to reset password.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="container d-flex justify-content-center mx-auto mt-5">
      <div className="card bg-light px-4 ">
        <h2 className="text-center pt-4">Reset Password</h2>
        <form onSubmit={handleReset} >
          <div className="form-group">
            <label className="fw-medium">Token from Email</label>
            <input
              type="text"
              className="form-control mb-2"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="fw-medium">New Password</label>
            <input
              type="password"
              className="form-control mb-2"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="fw-medium">Confirm Password</label>
            <input
              type="password"
              className="form-control mb-2"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" disabled={loading} className="btn btn-primary mb-2 mt-2 d-grid mx-auto">
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPass;
