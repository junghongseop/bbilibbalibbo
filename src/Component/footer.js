import React from "react";
import * as M from "./Mainpage/style";
import footer from "../img/footer.svg";

const Mainpg = () => {
  return (
    <body>
      <M.FooterImage src={footer} alt="footer" />
    </body>
  );
};

export default Mainpg;
