import React from "react";
import img from "../../img/photo.svg";
import * as S from "./style";

const CCTV = () => {
  return (
    <body>
      <S.CctvImage src={img} alt="CCTV" />
    </body>
  );
};

export default CCTV;
