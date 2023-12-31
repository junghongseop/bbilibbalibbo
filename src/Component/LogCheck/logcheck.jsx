/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import * as S from "./style";
import { axiosInstance } from "../../util/axios";
import Navbar from "../navbar";

function LogCheck() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/log")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setData(response.data);
        } else {
          throw new Error("Data received from server is not an array");
        }
      })
      .catch((error) => {
        console.error("An error occurred while fetching data: ", error);
      });
  }, []);

  return (
    <>
      <S.Body>
        <Navbar />
        <S.Title>출입 기록 관리</S.Title>
        <S.PagesContainer>
          {data.map((log) => {
            return (
              <S.PageBox>
                <S.Type>{log.type}</S.Type>
                <S.Log>LOG ID: {log.log_id}</S.Log>
                <S.Date>{log.date}</S.Date>
              </S.PageBox>
            );
          })}
        </S.PagesContainer>
      </S.Body>
    </>
  );
}

export default LogCheck;
