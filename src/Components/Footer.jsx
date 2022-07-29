import { ReactComponent as Facebook } from "../assets/facebook.svg";
import { ReactComponent as Email } from "../assets/email.svg";
import { ReactComponent as Instagram } from "../assets/instagram.svg";
import { ReactComponent as LinkedIn } from "../assets/linkedin.svg";

const fill = "black";
const width = 42.9;

const Footer = () => {
  return (
    <ul>
      <li>
        <a href="https://www.facebook.com/friendsofselvausa.org">
          <Facebook
            title="Facebook"
            width={width}
            fill={fill}
            className="social-icon"
          />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/friendsofselvausa/">
          <Instagram
            title="Instagram"
            width={width}
            fill={fill}
            className="social-icon"
          />
        </a>
      </li>

      <li>
        <a href="https://www.linkedin.com/showcase/friends-of-selva-vida-sin-fronteras-usa/">
          <LinkedIn
            title="LinkedIn"
            width={width}
            fill={fill}
            className="social-icon"
          />
        </a>
      </li>

      <li>
        <a href="mailto:fsvsfusa@gmail.com">
          <Email
            title="Email"
            width={width}
            fill={fill}
            className="social-icon"
          />
        </a>
      </li>
    </ul>
  );
};
export default Footer;
