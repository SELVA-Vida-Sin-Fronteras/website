import { Outlet } from "react-router";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer"
const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
