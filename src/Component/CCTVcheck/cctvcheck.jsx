import React, { useState } from "react";
import * as S from "./style";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import Navbar from "../navbar";
import video1 from "../../video/2023-12-07 19_59_49.mp4";
import video2 from "../../video/2023-12-07 20_03_13.mp4";
import time1 from "../../img/time1.svg";
import time2 from "../../img/time2.svg";
import x from "../../img/wx.svg";

function CCTVcheck() {
  const [isOpenningModalOpen1, setIsOpenningModalOpen1] = useState(false);
  const [isOpenningModalOpen2, setIsOpenningModalOpen2] = useState(false);

  return (
    <S.Body>
      <Navbar />
      <S.H2>영상 조회</S.H2>
      <S.Open onClick={() => setIsOpenningModalOpen1(true)}>
        <S.Time1Image src={time1} alt="time1" />
      </S.Open>
      <S.Open onClick={() => setIsOpenningModalOpen2(true)}>
        <S.Time2Image src={time2} alt="time2" />
      </S.Open>

      <Modal
        isOpen={isOpenningModalOpen1}
        onRequestClose={() => setIsOpenningModalOpen1(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.40)",
          },
          content: {
            overflow: "hidden",
            top: "60%",
            left: "28%",
            right: "0px",
            width: "720px",
            height: "515px",
            transform: "translateY(-50%)",
            background: "none",
            border: "none",
          },
        }}
      >
        <S.ModalContent>
          <S.PopupVideo src={video1} autoPlay controls />
          <Link to="/cctvcheck" onClick={() => setIsOpenningModalOpen1(false)}>
            <S.XImage src={x} alt="x" />
          </Link>
        </S.ModalContent>
      </Modal>

      <Modal
        isOpen={isOpenningModalOpen2}
        onRequestClose={() => setIsOpenningModalOpen1(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.40)",
          },
          content: {
            overflow: "hidden",
            top: "60%",
            left: "28%",
            right: "0px",
            width: "720px",
            height: "515px",
            transform: "translateY(-50%)",
            background: "none",
            border: "none",
          },
        }}
      >
        <S.ModalContent>
          <S.PopupVideo src={video2} autoPlay controls />
          <Link to="/cctvcheck" onClick={() => setIsOpenningModalOpen2(false)}>
            <S.XImage src={x} alt="x" />
          </Link>
        </S.ModalContent>
      </Modal>
    </S.Body>
  );
}

export default CCTVcheck;
