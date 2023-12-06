import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import styled from "styled-components";
import * as S from "./style";
import { Link } from "react-router-dom";
import cctvcheck from "../../img/cctvlog.svg";
import cctvcheck2 from "../../img/check.svg";
import temp from "../../img/temp.svg";
import log1 from "../../img/log1.svg";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css";
import $ from "jquery";

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
  //const [temperature, setTemperature] = useState(null);
  //const [humidity, setHumidity] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await $.ajax({
          url: "api/now",
          type: "GET",
        });

        console.log("Server response:", response);
        // 소수점을 제거하고 정수 값으로 변환
        const tempValue = Math.floor(response.temp);
        const humValue = Math.floor(response.hum);

        console.log("Temp and Hum values:", tempValue, humValue);

        //setTemperature(tempValue);
        //setHumidity(humValue);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    // Initial fetch
    fetchData();

    // Set up interval
    const intervalId = setInterval(() => {
      fetchData();
    }, 10000);

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once when the component mounts

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
        <S.TempImage src={temp} alt="temp" />
        <S.Body>
          <S.Temperature>24</S.Temperature>
        </S.Body>
        <S.Body>
          <S.Humidity>44</S.Humidity>
        </S.Body>
      </S.TempContainer>
    </>
  );
};

export default Log;
