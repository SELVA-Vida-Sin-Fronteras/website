import { Outlet } from "react-router";
import Navbar from "../components/NavBar";
const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default SharedLayout;
