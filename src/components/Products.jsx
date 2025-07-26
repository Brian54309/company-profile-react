import broco from "../assets/broco.png";
import panasonic from "../assets/panasonic.png";
import galleo from "../assets/galleo.png";
import plano from "../assets/plano.png";
import atlantic from "../assets/atlantic.png";
import stylee from "../assets/stylee.png";
import wide from "../assets/wide.png";

function Product() {
  return (
    <section className="container-fluid py-5 bg-light" id="product">
      <h2 className="text-center display-5 fw-bold mb-5" style={{ fontFamily: "Inter" }}>
        Products
      </h2>

      {/* Parent Row */}
      <div className="row justify-content-center">
        {/* Left Column - Broco side */}
        <div className="col-12 col-md-6 d-flex flex-column align-items-center gap-4 mb-5 mb-md-0">
          {/* Broco logo */}
          <img
            src={broco}
            alt="Broco"
            className="img-fluid "
            style={{ maxHeight: "150px", objectFit: "contain" }}
          />
          {/* Broco products */}
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {[galleo, plano, atlantic].map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Broco Product ${idx}`}
                className="img-fluid "
                style={{ maxHeight: "200px", width: "140px", objectFit: "contain" }}
              />
            ))}
          </div>
        </div>

        {/* Right Column - Panasonic side */}
        <div className="col-12 col-md-6 d-flex flex-column align-items-center gap-4">
          {/* Panasonic logo */}
          <img
            src={panasonic}
            alt="Panasonic"
            className="img-fluid "
            style={{ maxHeight: "150px", objectFit: "contain" }}
          />
          {/* Panasonic products */}
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {[stylee, wide].map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Panasonic Product ${idx}`}
                className="img-fluid "
                style={{ maxHeight: "200px", width: "140px", objectFit: "contain" }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
