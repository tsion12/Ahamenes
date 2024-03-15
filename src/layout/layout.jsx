import React from "react";

import Footer from "./Footer";
import NavBar from "./NavBar";

const LandingLayout = ({ children }) => {
  return (
    <>
      {" "}
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default LandingLayout;
