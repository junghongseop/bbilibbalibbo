import React from "react";
import * as S from "./style";
import log1 from "../../img/log1.svg";
import log2 from "../../img/log2.svg";
import { Link } from "react-router-dom";

const Log = () => {
  return (
    <S.LogContainer>
      <Link to="/log">
        <S.LogImage src={log1} alt="log" />
      </Link>
    </S.LogContainer>
  );
};

export default Log;
