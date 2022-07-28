import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

const SharedLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <h2>Footer</h2>
    </>
  );
};
export default SharedLayout;
