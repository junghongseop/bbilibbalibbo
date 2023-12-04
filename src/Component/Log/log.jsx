import React from "react";
import * as S from "./style";
import log1 from "../../img/log1.svg";
// import log2 from "../../img/log2.svg";
import { Link } from "react-router-dom";
import cctvcheck from "../../img/cctvlog.svg";
import cctvcheck2 from "../../img/check.svg";

const Log = () => {
  return (
    <>
      <S.LogContainer>
        <Link to="/log">
          <S.LogImage src={log1} alt="log" />
        </Link>
      </S.LogContainer>
      <S.CctvContainer>
        <S.CctvImage src={cctvcheck} alt="cctvcheck" />
        <Link to="/cctvcheck">
          <S.Button src={cctvcheck2} alt="cctvcheck2" />
        </Link>
      </S.CctvContainer>
    </>
  );
};

export default Log;
