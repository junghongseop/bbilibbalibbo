import React from "react";
import img from "../../img/photo.svg";
import * as S from "./style";
import vector from "../../img/vector.svg";
import { Link } from "react-router-dom";

const CCTV = () => {
  return (
    <body>
      <S.CctvImage src={img} alt="CCTV" />
      <S.VectorContainer>
        <S.VectorText>
          <Link to="/cctv">
            <S.VectorImage src={vector} alt="vector" />
          </Link>
        </S.VectorText>
      </S.VectorContainer>
    </body>
  );
};

export default CCTV;
