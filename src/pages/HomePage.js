import { Link } from "react-router-dom";
import enrichment from "../assets/img/homePageEnrichmentJourney.jpg";
import blogImage from "../assets/img/home-blog.jpg";
import actionImage from "../assets/img/home-take-action.jpg";

const HomePage = () => {
  return (
    <main data-testid="home-page" className="bg-light p-5">
      <div className="container">
        <section
          className="card p-2 m-auto mt-5 shadow-lg"
          style={{ width: "20rem" }}
          data-testid="home-mission"
        >
          <h1 className="card-title text-center">Our Mission</h1>
          <p className="card-body">
            Our Mission is to protect the flora and fauna of the Amazon
            Rainforest, its ancestral indigenous communities, and the Galapagos
            Archipelago and Marine Reserve by increasing awareness for cultural
            and environmental preservation through educational experiences.
          </p>
          <div className="card-footer text-center">
            <Link className="btn btn-primary" to="/takeaction">
              How to help
            </Link>
          </div>
        </section>
      </div>
      <div className="container">
        <div className="row m-5">
        <section
        className="card p-2 m-auto mt-5 shadow-lg"
        style={{ width: "20rem" }}
        data-testid="home-enrichment"
      >
        <h2 className="card-title text-center">Enrichment Journey</h2>
        <div className="card-body">
          <img src={enrichment} className="card-img" alt="" />
        </div>
        <div className="card-footer text-center">
          <Link
            className="btn btn-primary"
            to="/enrichment
          "
          >
            Start your journey
          </Link>
        </div>
      </section>
      <section
        className="card p-2 m-auto mt-5 shadow-lg"
        style={{ width: "20rem" }}
        data-testid="home-blog"
      >
        <h2 className="card-title text-center">Blog</h2>
        <div className="card-body">
          <img src={blogImage} className="card-img" alt="" />
        </div>
        <div className="card-footer text-center">
          <Link className="btn btn-primary" to="/blog">
            Read our blog
          </Link>
        </div>
      </section>
      <section
        className="card p-2 m-auto mt-5 shadow-lg"
        style={{ width: "20rem" }}
        data-testid="home-take-action"
      >
        <h2 className="card-title text-center">Take Action</h2>
        <div className="card-body">
          <img src={actionImage} className="card-img" alt="" />
        </div>
        <div className="card-footer text-center">
          <Link className="btn btn-primary" to="/takeaction">
            How you can help
          </Link>
        </div>
      </section>
        </div>
      
      </div>
      
    </main>
  );
};

export default HomePage;
