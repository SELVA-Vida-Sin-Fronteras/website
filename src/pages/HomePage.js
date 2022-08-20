import { Link } from "react-router-dom";
import enrichment from "../assets/img/homePageEnrichmentJourney.jpg";
import blogImage from "../assets/img/home-blog.jpg";
import actionImage from "../assets/img/home-take-action.jpg";

const HomePage = () => {
  return (
    <main data-testid="home-page">
      <div className="container">
      <section
        className="card p-2 m-auto mt-5 shadow-lg"
        style={{ width: "20rem" }}
        data-testid="mission"
      >
        <h1 className="card-title text-center">Our Mission</h1>
        <p className="card-body">
          Our Mission is to protect the flora and fauna of the Amazon
          Rainforest, its ancestral indigenous communities, and the Galapagos
          Archipelago and Marine Reserve by increasing awareness for cultural
          and environmental preservation through educational experiences.
        </p>
        <div className="card-footer text-center">
          <Link className="btn btn-primary" to="">
            How to help
          </Link>
        </div>
      </section>
      </div>
      
      <section
        className="card p-2 m-auto mt-5 shadow-lg"
        style={{ width: "20rem" }}
        data-testid="enrichment"

      >
        <h2 className="card-title text-center">Enrichment Journey</h2>
        <div className="card-body">
          <img src={enrichment} className="card-img" alt="" />
        </div>
        <div className="card-footer text-center">
          <Link className="btn btn-primary" to="">
            Start your journey
          </Link>
        </div>
      </section>
      <section
        className="card p-2 m-auto mt-5 shadow-lg"
        style={{ width: "20rem" }}
        data-testid="blog"

      >
        <h2 className="card-title text-center">Blog</h2>
        <div className="card-body">
          <img src={blogImage} className="card-img" alt="" />
        </div>
        <div className="card-footer text-center">
          <Link className="btn btn-primary" to="">
            Start your journey
          </Link>
        </div>
      </section>
      <section
        className="card p-2 m-auto mt-5 shadow-lg"
        style={{ width: "20rem" }}
        data-testid="take-action"

      >
        <h2 className="card-title text-center">Take Action</h2>
        <div className="card-body">
          <img src={actionImage} className="card-img" alt="" />
        </div>
        <div className="card-footer text-center">
          <Link className="btn btn-primary" to="">
            Start your journey
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
