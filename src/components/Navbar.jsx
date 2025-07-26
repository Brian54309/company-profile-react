import "./style.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // localStorage.removeItem("token");
    // sessionStorage.removeItem("token");

    // document.cookie.split(";").forEach((cookie) => {
    //   document.cookie = cookie
    //     .replace(/^ +/, "")
    //     .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    // });

    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-primary shadow-sm">
      <div className="container">
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-around w-100">
            <li className="nav-item">
              <Link to="/dashboard#home" className="nav-link text-white mx-5">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard#about" className="nav-link text-white mx-5">About Us</Link>
            </li>
            <li className="nav-item dropdown">
              <a
                href="#product"
                className="nav-link text-white mx-5 dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Product
              </a>
              <ul className="dropdown-menu">
                <li><Link to="/broco" className="dropdown-item">Broco</Link></li>
                <li><Link to="/panasonic" className="dropdown-item">Panasonic</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link text-white mx-5">Contact</Link>
            </li>
            <li>
              <button onClick={handleLogout} className="border-0 btn btn-danger">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
