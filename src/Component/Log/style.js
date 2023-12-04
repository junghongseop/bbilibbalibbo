import styled from "styled-components";

export const ImageContainer = styled.div`
  /* 새로운 스타일 컴포넌트 추가 */
  display: flex;
  justify-content: space-around;
`;

export const LogImage = styled.img`
  width: 500px;
  height: auto;
  position: absolute;
  left: 400px;
  top: 300px;
`;

export const LogContainer = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  height: 100vh;
  position: relative;
`;

export const CctvImage = styled.img`
  width: auto;
  height: auto;
  position: absolute;
  left: 950px;
  top: -584px;
`;

export const CctvContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  position: relative;
`;

export const Button = styled.img`
  width: auto;
  height: auto;
  position: absolute;
  right: 550px;
  top: -300px;
`;
