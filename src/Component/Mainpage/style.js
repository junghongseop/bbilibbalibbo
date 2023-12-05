import style from "styled-components";

export const NavbarContainer = style.div`
  width: 98%;
  height: 90px;
  background: #fff;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
`;

export const LogoContainer = style.div`
  display: flex;
  align-items: center;
`;

export const LogoText = style.span`
  color: #000;
  font-family: Inter;
  font-size: 25px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin-left: 5px;

  position: fixed;
  left: 120px;
`;

export const LogoImage = style.img`
  width: 200px;
  height: 35px;
  flex-shrink: 1;
  background: #fff;

  position: fixed;
  left: 90px;
  top: 30px;
`;

export const LoginContainer = style.div`
  display: flex;
  align-items: center;
`;

export const LoginText = style.span`
  color: #000;
  font-family: Inter;
  font-size: 25px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin-left: 5px;

  position: fixed;
  left: 120px;
  `;

export const LoginImage = style.img`
  width: 60px;
  height: 30px;
  flex-shrink: 1;
  background: #fff;

  position: fixed;
  right: 270px;
  top: 30px;
`;

export const SignContainer = style.div`
  display: flex;
  align-items: center;
`;

export const SignText = style.span`
  color: #000;
  font-family: Inter;
  font-size: 25px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin-left: 5px;

  position: fixed;
  left: 120px;
  `;

export const SignImage = style.img`
  width: 80px;
  height: 30px;
  flex-shrink: 1;
  background: #fff;

  position: fixed;
  right: 110px;
  top: 30px;
`;

export const BarContainer = style.div`
  display: flex;
  align-items: center;
`;

export const BarText = style.span`
  color: #000;
  font-family: Inter;
  font-size: 25px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin-left: 5px;

  position: fixed;
  left: 120px;
  `;

export const BarImage = style.img`
  width: 20px;
  height: 35px;
  flex-shrink: 1;
  background: #fff;

  position: fixed;
  right: 223px;
  top: 30px;
`;

export const FooterImage = style.img`
  width: 100%;
  height: 100%;
  flex-shrink: 1;
  background: #fff;

  right: 0px;
  bottom: -200px;
`;
