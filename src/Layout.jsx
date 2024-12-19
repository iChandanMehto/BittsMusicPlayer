import { Outlet } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";

import Section from "./components/Section.jsx";

const Layout = () => {
  return (
    <>
      <Navbar Home="Home" />
      <main>
        <Section/>
        {/* This will render the matched route component, like Section or others */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
