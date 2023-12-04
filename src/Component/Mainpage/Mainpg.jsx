import Nav from "../navbar";
import React from "react";
import CCTV from "../CCTV/cctv";
import Log from "../Log/log";

const Mainpg = () => {
  return (
    <body>
      <div>
        <Nav />
        <CCTV />
        <Log />
      </div>
    </body>
  );
};

export default Mainpg;
