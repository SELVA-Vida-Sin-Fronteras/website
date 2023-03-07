import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

const Navbar = () => {
  //FIXME: fix layout on small screens
  //FIXME: remove unecessary divs
  //FIXME: Nav menu should close on link selected
  //FIXME: nav menu should close on mouse out
  //FIXME: nave menue should close on scroll
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark navbar-top fixed-top p-3"
        data-testid="nav-bar"
      >
        <div className="container-fluid">
          <Link className="navbar-brand  fs-6" to="/" data-testid="logo">
            <img src={logo} alt="" className="float-start mx-2" />
            Friends of SELVA <br></br> Vida Sin Fronteras
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/whoweare">
                  Who We Are
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/enrichment">
                  Enrichment Journey
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link btn btn-primary text-light"
                  aria-current="page"
                  to="/takeaction"
                >
                  Take Action
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="p-4 mb-5"></div>
    </>
  );
};

export default Navbar;
