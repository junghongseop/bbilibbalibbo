import style from "styled-components";

export const NavbarContainer = style.div`
  width: 98%;
  height: 80px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
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
  width: 48px;
  height: 55px;
  flex-shrink: 0;
  background: #fff;

  position: fixed;
  left: 65px;
`;
