import React from "react";
import * as M from "./Mainpage/style";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";
import login from "../img/login.svg";
import sign from "../img/sign.svg";
import bar from "../img/bar.svg";

const Mainpg = () => {
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
        <M.LoginContainer>
          <M.LoginText>
            <Link to="/login">
              <M.LoginImage src={login} alt="Login" />
            </Link>
          </M.LoginText>
        </M.LoginContainer>
        <M.SignContainer>
          <M.SignText>
            <Link to="/sign">
              <M.SignImage src={sign} alt="Sign" />
            </Link>
          </M.SignText>
        </M.SignContainer>
        <M.BarContainer>
          <M.BarText>
            <M.BarImage src={bar} alt="bar" />
          </M.BarText>
        </M.BarContainer>
      </M.NavbarContainer>
    </body>
  );
};

export default Mainpg;
