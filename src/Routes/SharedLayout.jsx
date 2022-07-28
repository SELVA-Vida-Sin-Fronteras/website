import { Outlet } from "react-router-dom";
const SharedLayout = () => {
  return (
    <>
      <h1>Navbar</h1>
      <Outlet />
      <h2>Footer</h2>
    </>
  );
};
export default SharedLayout;
