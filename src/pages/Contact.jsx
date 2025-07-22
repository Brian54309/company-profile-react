import "./Contact.css";
import { Link } from "react-router-dom";
function Contact() {
  return (
    <div>
      <section className="container-fluid text-dark text-center mb-0" id="upperbg">
        <div className="container">
          <img
            src="src\assets\image 19.png"
            className="mx-auto d-block mb-xl-4"
          />

          <h1 className="display-4 fw-bold mx-auto mb-lg-4">Contact Us</h1>
          <p className="display-6 mb-0 pb-2">Please Contact us for more information</p>
        </div>
      </section>

      <section className="container-fluid text-dark bg-light">
          <div className="row justify-content-around pt-4 pb-4">
            <div className="col-md-2 ">
              <div className="card border-2 px-1 py-3" style={{width: "250px", height:"250px"}}>
                <img
                  src="src\assets\Rectangle.png"
                  alt="location"
                  className="card-img-top mx-auto"
                  id="img_size"
                />
                <p className="card-text text-center pt-5 fw-medium">
                  Jl. Kramat Raya No.101 Plaza Kenari Mas, Lantai 5, Blok M 1A
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card border-2 px-1 py-3" style={{width: "250px", height:"250px"}}>

                <img
                  src="src\assets\image 16.png"
                  alt="location"
                  className="card-img-top mx-auto"
                  id="img_size"
                />
                <p className="card-text text-center pt-5 fw-medium fs-4">
                  (021)31313
                </p>
              </div>
            </div>
                <div className="col-md-2">
              <div className="card border-2 px-1 py-3"style={{width: "250px", height:"250px"}}>
                <img
                  src="src\assets\image 18.png"
                  alt="location"
                  className="card-img-top mx-auto"
                  id="img_size"
                />
                <p className="card-text text-center pt-5 fw-medium fs-4">
                  +62717171717
                </p>
              </div>
            </div>
        </div>
        <Link to='/dashboard'><p>Back To Home Page</p></Link>
      </section>
    </div>
  );
}

export default Contact;
