import Nav from "../navbar";
import React from "react";
import CCTV from "../CCTV/cctv";
import Log from "../Log/log";
import Footer from "../footer";

const Mainpg = () => {
  return (
    <body>
      <div>
        <Nav />
        <CCTV />
        <Log />
        <Footer />
      </div>
    </body>
  );
};

export default Mainpg;
