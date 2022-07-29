import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <h2>401</h2>
      <p>Page not found</p>
      <NavLink to="/">Back to home</NavLink>
    </div>
  );
};
export default Error;
