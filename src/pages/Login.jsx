import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// login page
function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

// const HandleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     const { data } = await axios.post("/api/auth/login", {
//       identifier: username,
//       password,
//     }, {
//       withCredentials: true,
//     });
//     localStorage.setItem('token', data.token)
//     localStorage.setItem("role", data.role);
//     navigate("/dashboard");
//   } catch (error) {
//     alert("Wrong username or password");
//     console.error(error);
//   }
// };
const HandleSubmit=(e)=>{
  e.preventDefault()
  navigate('/dashboard')
}

  return (
    <div className="container d-flex justify-content-center mx-auto mt-5">
      <div className="card bg-light px-4">
        <h2 className="text-center pt-4">Login</h2>
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
          <div className="form-group">
            <label className="fw-medium">Password</label>
            <input
              type="password"
              className="form-control mb-2"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary mb-2 mt-2 d-grid mx-auto">
            Submit
          </button>
        </form>
        <div className="d-flex row">
        <Link
          className="link-offset-2 link-underline link-underline-opacity-0"
          to="/register"
        >
          <button className="border-0 bg-light mb-2 mt-2">Register Here</button>
        </Link>
        <Link
          className="link-underline link-underline-opacity-0"
          to="/forgotpass"
        >
          <button className="border-0 bg-light mb-2 mt-2">
            Forgot Password
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
}
export default Login;
