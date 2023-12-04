import React from "react";
import * as M from "./Mainpage/style";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";

const Mainpage = () => {
  return (
    <body>
      {/* navbar */}
      <M.NavbarContainer>
        <M.LogoContainer>
          <M.LogoText>
            <Link to="/">
              <M.LogoImage src={logo} alt="Logo" />
            </Link>
            {/* src 속성값을 import한 logo로 변경 */}
          </M.LogoText>
        </M.LogoContainer>
      </M.NavbarContainer>
    </body>
  );
};
