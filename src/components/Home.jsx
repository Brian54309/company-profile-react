import Navbar from "./Navbar";
import logo from "../assets/logo.png"
import "./style.css"; // Optional: Remove if styles are now in Bootstrap classes

function Home() {
  return (
    <>
      <div className="container-fluid px-0 bg-light py-5" style={{ minHeight: "735px" }} id="home">
        <div className="container py-5">
          <div className="row align-items-center">
            {/* Left column with text */}
            <div className="col-md-6 text-center text-md-start">
              <h1 className="display-4 fw-bold" style={{ fontFamily: "Inter" }}>
                Official Distributor for Broco & Panasonic
              </h1>
              <p className="fs-4 mt-3" style={{ fontFamily: "Montserrat" }}>
                We provide high-quality electrical appliances and products to retail businesses
              </p>
              <a href="#product" className="btn btn-primary btn-lg mt-4 text-white">
                View Products
              </a>
            </div>

            {/* Right column with logo image */}
            <div className="col-md-6 text-center mt-5 mt-md-0">
              <img
                src={logo}
                alt="Company Logo"
                className="img-fluid rounded"
                style={{ maxWidth: "330px", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
