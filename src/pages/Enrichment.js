import slide1 from "../assets/img/clinic-1.jpg";
import slide2 from "../assets/img/clinic-2.jpg";
import slide3 from "../assets/img/dining-1.jpg";

const Enrichment = () => {
  return (
    <div
      data-testid="enrichment"
      className="bg-light p-5 justify-content-center"
    >
      <div className="container">
        <section className="card m-auto" style={{maxWidth: "40rem"}}>
          <h1 className="card-title card-header">Enrichment Journeys</h1>

          <p className="card-body">
            While temporarily on hold due to Covid-19 we do plan to go again in
            Spring of 2023.
          </p>
        </section>
        <div
          id="carouselExampleControls"
          className="carousel slide mt-5"
          data-bs-ride="carousel"
          aria-hidden="true"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src={slide1} className="d-block w-100" alt="" />
            </div>
            <div className="carousel-item">
              <img src={slide2} className="d-block w-100" alt="" />
            </div>
            <div className="carousel-item">
              <img src={slide3} className="d-block w-100" alt="" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Enrichment;
