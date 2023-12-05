import styled from "styled-components";

export const ImageContainer = styled.div`
  /* 새로운 스타일 컴포넌트 추가 */
  display: flex;
  justify-content: space-around;
`;

export const LogImage = styled.img`
  width: 400px;
  height: 300px;
  position: absolute;
  left: 300px;
  top: 100px;
`;

export const LogContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40vh;
  position: relative;
`;

export const CctvImage = styled.img`
  width: 500px;
  height: 600px;
  position: absolute;
  left: 740px;
  top: -205px;
`;

export const CctvContainer = styled.div`
  display: flex;
  align-items: center;
  height: 90vh;
  position: relative;
`;

export const Button = styled.img`
  width: auto;
  height: auto;
  position: absolute;
  right: 450px;
  top: 170px;
`;
