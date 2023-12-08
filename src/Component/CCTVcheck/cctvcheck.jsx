import React from "react";
import * as S from "./style";
import Navbar from "../navbar";
import video1 from "../../video/AnyConv.com__2023-12-07 19_59_49.mp4";

function CCTVcheck() {
  return (
    <S.Body>
      <Navbar />
      <video width="360" height="280" controls="controls">
        <source src={video1} type="video/mp4" />
      </video>
    </S.Body>
  );
}

export default CCTVcheck;
