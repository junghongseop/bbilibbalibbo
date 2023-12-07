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
//import Modal from "react-modal";
//import openpopup from "../../img/openpopup.svg";
//import x from "../../img/x.svg";

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
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isModalClose, setIsModalClose] = useState(false);

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

    // 컴포넌트가 마운트될 때 데이터를 한 번 가져옵니다.
    fetchData();

    // 10초마다 fetchData를 호출하는 인터벌을 설정합니다.
    const intervalId = setInterval(fetchData, 10000);

    // 컴포넌트가 언마운트될 때 인터벌을 해제합니다.
    return () => clearInterval(intervalId);
  }, []);

  const handleOpenClick = async () => {
    try {
      const response = await axiosInstance.get("/open");
      console.log(response.data); // 응답 확인
      if (response.data.check === "open_error") {
        alert("이미 문이 열려있습니다.");
      } else if (response.data.check === "open_success") {
        alert("문이 열렸습니다.");
      }
    } catch (error) {
      console.error("Open API error:", error);
    }
  };

  const handleCloseClick = async () => {
    try {
      const response = await axiosInstance.get("/close");
      console.log(response.data); // 응답 확인
      if (response.data.check === "close_error") {
        alert("이미 문이 닫혀있습니다.");
      } else if (response.data.check === "close_success") {
        alert("문이 닫혔습니다.");
      }
    } catch (error) {
      console.error("Open API error:", error);
    }
  };

  return (
    <>
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
    </>
  );
};

export default Log;
