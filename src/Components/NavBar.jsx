import { NavLink } from "react-router-dom";
import { logo } from "../assets/logo.jpg";

const NavBar = () => {
  return (
    <>
      <h1>Friends of SELVA Vida Sin Fronteras</h1>
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
    </>
  );
};

export default NavBar;
