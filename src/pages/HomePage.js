import { Link } from "react-router-dom";
import enrichment from "../assets/img/homePageEnrichmentJourney.jpg";
import blogImage from "../assets/img/home-blog.jpg";
import actionImage from "../assets/img/home-take-action.jpg";

const HomePage = () => {
  // TODO: fix divities 
  return (
    <div data-testid="home-page" className="home-page page">
      <div className="img-container-hero img-container-hero--home d-flex">
        <section
          className="card card__hero text-light p-2 m-auto shadow-lg "
          data-testid="home-mission"
          style={{ maxWidth: "40rem" }}
        >
          <h1 className="card-title text-center">Our Mission</h1>
          <p className="card-body">
            Our Mission is to protect the flora and fauna of the Amazon
            Rainforest, its ancestral indigenous communities, and the Galapagos
            Archipelago and Marine Reserve by increasing awareness for cultural
            and environmental preservation through educational experiences.
          </p>
          <div className="card-footer text-center">
            <Link className="btn btn-secondary btn-lg" to="/takeaction">
              How to help
            </Link>
          </div>
        </section>
      </div>
      <div className="p-5">
        <div className="container">
          <div className="row">
            <div className="col-lg">
              <section
                className="card p-2 m-auto mt-5 shadow-lg "
                data-testid="home-enrichment"
              >
                <h2 className="card-title text-center fs-3">
                  Enrichment Journey
                </h2>
                <div className="card-body">
                  <img src={enrichment} className="card-img" alt="" />
                </div>
                <div className="card-footer text-center">
                  <Link
                    className="btn btn-primary btn-lg"
                    to="/enrichment
          "
                  >
                    Start your journey
                  </Link>
                </div>
              </section>
            </div>
            <div className="col-lg">
              <section
                className="card p-2 m-auto mt-5 shadow-lg "
                data-testid="home-blog"
              >
                <h2 className="card-title text-center fs-3">Blog</h2>
                <div className="card-body">
                  <img src={blogImage} className="card-img" alt="" />
                </div>
                <div className="card-footer text-center">
                  <Link className="btn btn-primary btn-lg" to="/blog">
                    Read our blog
                  </Link>
                </div>
              </section>
            </div>

            <div className="col-lg">
              <section
                className="card p-2 m-auto mt-5 shadow-lg "
                data-testid="home-take-action"
              >
                <h2 className="card-title text-center fs-3">Take Action</h2>
                <div className="card-body">
                  <img src={actionImage} className="card-img" alt="" />
                </div>
                <div className="card-footer text-center">
                  <Link className="btn btn-primary btn-lg" to="/takeaction">
                    How you can help
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
