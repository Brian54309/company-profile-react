import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Register() {

  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/auth/register", {
        username,
        email,
        password,
        confirmPassword,
      });
      navigate("/")
    } catch (error) {
      console.error(error);
    }
  };

  return (
        <div className="container d-flex justify-content-center mx-auto mt-5">
    <div className="card bg-light px-4">
      <h2 className="text-center pt-4">Register</h2>
      <form onSubmit={HandleSubmit} className="mt-2">
        <div className="form-group">
          <label className="fw-medium">Username</label>
          <input
          pattern="[a-zA-Z0-9]+"
            type="text"
            className="form-control mb-2"
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label className="fw-medium">Email address</label>
          <input
            type="email"
            className="form-control "
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted mb-2">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label className="fw-medium">Password</label>
          <input
            type="password"
            class="form-control mb-2"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label className="fw-medium">Confirm Password</label>
          <input
            type="password"
            class="form-control mb-2"
            placeholder="Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" class="btn btn-primary mb-2 mt-2 d-grid mx-auto">
          Submit
        </button>
      </form>
      <div className="d-flex row">
      <Link to="/login">
        <button className="border-0 bg-light mb-2 mt-2">Have an Account? Login</button>
      </Link>
      <Link to='/forgotpass'>
      <button className="border-0 bg-light mb-2 mt-2 ">Forgot Password</button>
      </Link>
    </div>
    </div>
    </div>
  );
}
export default Register;
