import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div className="homepage">
      <h2>Our Mission</h2>
      <p>
        Our Mission is to protect the flora and fauna of the Amazon Rainforest,
        its ancestral indigenous communities, and the Galapagos Archipelago and
        Marine Reserve by increasing awareness for cultural and environmental
        preservation through educational experiences.
      </p>
      <NavLink to="/">Home</NavLink>
      {" | "}
      <NavLink to="/WhoWeAre">Who We Are</NavLink>
      {" | "}
      <NavLink to="/EnrichmentJourney">Enrichment Journey</NavLink>
      {" | "}
      <NavLink to="/Blog">Blog</NavLink>
      {" | "}
      <NavLink to="/TakeAction">Take Action</NavLink>
      {" | "}
    </div>
  );
};

export default Home;
