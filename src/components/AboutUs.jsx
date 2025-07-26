import "./style.css"; // Optional if you're moving everything to Bootstrap
import buildingImage from "../assets/image 14.png"; // Vite/Webpack compatible

function AboutUs() {
  return (
    <section className="container my-5" id="about">
      <div className="row align-items-center">
        {/* Left Column: Text */}
        <div className="col-lg-6">
          <h2 className="display-5 fw-bold mb-4" style={{ fontFamily: "Inter" }}>
            About Us
          </h2>
          <p className="fs-5 mb-4" style={{ fontFamily: "Montserrat" }}>
            PT National Gama Persada is a trusted distributor of premium electrical
            and electronic products, proudly serving as an official distributor for
            Broco and Panasonic. Based in Plaza Kenari Mas, we provide reliable,
            high-quality solutions tailored to the needs of residential, commercial,
            and industrial markets.
          </p>
          <p className="fs-5" style={{ fontFamily: "Montserrat" }}>
            With a solid reputation for professionalism and customer-focused
            service, PT National Gama Persada is committed to delivering excellence
            in both product offerings and client support.
          </p>
        </div>

        {/* Right Column: Image */}
        <div className="col-lg-6 text-center mt-5 mt-lg-0">
          <img
            src={buildingImage}
            alt="Building"
            className="img-fluid rounded"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
