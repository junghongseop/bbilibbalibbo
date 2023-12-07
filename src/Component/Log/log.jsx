/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import styled from "styled-components";
import * as S from "./style";
import { Link } from "react-router-dom";
import cctvcheck from "../../img/cctvlog.svg";
import cctvcheck2 from "../../img/check.svg";
import temp1 from "../../img/temp.svg";
import log1 from "../../img/log1.svg";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css";
import axiosInstance from "../../util/axios";
import open from "../../img/open.svg";
import close from "../../img/close.svg";
import Modal from "react-modal";
import openpopup from "../../img/openpopup.svg";
import x from "../../img/x.svg";
import closepopup from "../../img/closepopup.svg";
import closing from "../../img/closing.svg";
import openning from "../../img/openning.svg";

const DatePickerWrapper = styled(S.CctvContainer)`
  .react-datepicker-wrapper {
    width: 250px;
    height: 100px;
    position: absolute;
    right: 514px;
    top: 55px;
  }
`;

const Log = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [temp, setTemperature] = useState(null);
  const [hum, setHumidity] = useState(null);
  const [isOpenModalOpen, setIsOpenModalOpen] = useState(false);
  const [isCloseModalOpen, setIsCloseModalOpen] = useState(false);
  const [isOpenningModalOpen, setIsOpenningModalOpen] = useState(false);
  const [isClosingModalOpen, setIsClosingModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/now");
        const { temp, hum } = response.data;
        setTemperature(temp);
        setHumidity(hum);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const handleOpenClick = async () => {
    try {
      const response = await axiosInstance.get("/open");
      console.log(response.data);
      if (response.data.check === "open_error") {
        setIsOpenningModalOpen(true);
      } else if (response.data.check === "open_success") {
        setIsOpenModalOpen(true);
      }
    } catch (error) {
      console.error("Open API error:", error);
    }
  };

  const handleCloseClick = async () => {
    try {
      const response = await axiosInstance.get("/close");
      console.log(response.data);
      if (response.data.check === "close_error") {
        setIsClosingModalOpen(true);
      } else if (response.data.check === "close_success") {
        setIsCloseModalOpen(true);
      }
    } catch (error) {
      console.error("Open API error:", error);
    }
  };

  const closeModal = () => {
    document.body.style.overflow = "auto";
    setIsOpenModalOpen(false);
    setIsCloseModalOpen(false);
    setIsOpenningModalOpen(false);
    setIsClosingModalOpen(false);
  };

  return (
    <S.AllContainer>
      <S.LogContainer>
        <Link to="/log">
          <S.LogImage src={log1} alt="log" />
        </Link>
      </S.LogContainer>
      <DatePickerWrapper>
        <S.CctvImage src={cctvcheck} alt="cctvcheck" />
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
        <Link to="/cctvcheck">
          <S.Button src={cctvcheck2} alt="cctvcheck2" />
        </Link>
      </DatePickerWrapper>
      <S.TempContainer>
        <S.TempImage src={temp1} alt="temp" />
        <S.Body>
          <S.Temperature>
            지금 온도 {temp} °C | 습도 {hum} %{" "}
          </S.Temperature>
        </S.Body>
      </S.TempContainer>
      <S.Open onClick={handleOpenClick}>
        <S.OpenImage src={open} alt="open" />
      </S.Open>
      <S.Close onClick={handleCloseClick}>
        <S.CloseImage src={close} alt="close" />
      </S.Close>

      <Modal
        isOpen={isOpenModalOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.40)",
          },
          content: {
            overflow: "hidden", // 모달 내부 스크롤 제거
            top: "55%", // 화면의 중앙에 위치
            left: "25%", // 왼쪽 위치는 자동으로 설정
            right: "0px", // 화면 오른쪽 끝에 위치
            width: "659.695px", // 모달 너비 조절
            height: "428px", // 모달 높이 조절
            transform: "translateY(-50%)", // Y축 방향으로 50% 이동하여 중심점을 맞춤
          },
        }}
      >
        <S.ModalContent>
          <S.PopupImage src={openpopup} alt="openpopup" />
          <Link to="/" onClick={closeModal}>
            <S.XImage src={x} alt="x" />
          </Link>
        </S.ModalContent>
      </Modal>

      <Modal
        isOpen={isCloseModalOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.40)",
          },
          content: {
            overflow: "hidden", // 모달 내부 스크롤 제거
            top: "55%", // 화면의 중앙에 위치
            left: "25%", // 왼쪽 위치는 자동으로 설정
            right: "0px", // 화면 오른쪽 끝에 위치
            width: "659.695px", // 모달 너비 조절
            height: "428px", // 모달 높이 조절
            transform: "translateY(-50%)", // Y축 방향으로 50% 이동하여 중심점을 맞춤
          },
        }}
      >
        <S.ModalContent>
          <S.PopupImage src={closepopup} alt="closepopup" />
          <Link to="/" onClick={closeModal}>
            <S.XImage src={x} alt="x" />
          </Link>
        </S.ModalContent>
      </Modal>

      <Modal
        isOpen={isClosingModalOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.40)",
          },
          content: {
            overflow: "hidden", // 모달 내부 스크롤 제거
            top: "55%", // 화면의 중앙에 위치
            left: "25%", // 왼쪽 위치는 자동으로 설정
            right: "0px", // 화면 오른쪽 끝에 위치
            width: "659.695px", // 모달 너비 조절
            height: "428px", // 모달 높이 조절
            transform: "translateY(-50%)", // Y축 방향으로 50% 이동하여 중심점을 맞춤
          },
        }}
      >
        <S.ModalContent>
          <S.PopupImage src={closing} alt="closing" />
          <Link to="/" onClick={closeModal}>
            <S.XImage src={x} alt="x" />
          </Link>
        </S.ModalContent>
      </Modal>

      <Modal
        isOpen={isOpenningModalOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.40)",
          },
          content: {
            overflow: "hidden", // 모달 내부 스크롤 제거
            top: "55%", // 화면의 중앙에 위치
            left: "25%", // 왼쪽 위치는 자동으로 설정
            right: "0px", // 화면 오른쪽 끝에 위치
            width: "659.695px", // 모달 너비 조절
            height: "428px", // 모달 높이 조절
            transform: "translateY(-50%)", // Y축 방향으로 50% 이동하여 중심점을 맞춤
          },
        }}
      >
        <S.ModalContent>
          <S.PopupImage src={openning} alt="openning" />
          <Link to="/" onClick={closeModal}>
            <S.XImage src={x} alt="x" />
          </Link>
        </S.ModalContent>
      </Modal>
    </S.AllContainer>
  );
};

export default Log;
