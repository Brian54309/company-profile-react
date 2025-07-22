import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function ForgotPass() {
    const navigate = useNavigate()
  const [email, setEmail] = useState("");

  const HandleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post("/api/auth/forgot-password", {
        email,
      })
        navigate('/resetpass')

    } catch (error) {
      console.error(error.response?.data);
    }

  };

  return (
    <div className="container d-flex justify-content-center mx-auto mt-5">
    <div className="card bg-light px-4">
      <h2 className="text-center pt-4">Forget Password</h2>
      <form onSubmit={HandleSubmit} className="mt-2">
        <label className="fw-medium">Email</label>
        <input
          type="email"
          className="form-control mb-4"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="btn btn-primary mb-2 mt-2 d-grid mx-auto">
          Send Email
        </button>
      </form>
      <Link to='/login'><button className="border-0 bg-light mb-2 mt-2">Login</button></Link>
    </div>
    </div>
  );
}

export default ForgotPass;
