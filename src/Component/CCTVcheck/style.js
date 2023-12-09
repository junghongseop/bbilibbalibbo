import styled from "styled-components";

export const H2 = styled.div`
  position: absolute;
  width: 400px;
  height: 30px;
  font-size: 30px;
  font-weight: 700;
  line-height: 50px;
  text-align: left;
  top: 160px;
  left: 200px;
`;

export const Body = styled.body`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 13% 0 0 0;
`;

export const Time1Image = styled.img`
  width: 600px;
  height: auto;
  position: absolute;
  top: 230px;
  left: 200px;
`;

export const Time2Image = styled.img`
  width: 600px;
  height: auto;
  position: absolute;
  top: 280px;
  left: 200px;
  border: 1px soild;
`;

export const ModalContent = styled.div`
  display: flex !important;
  width: 0px;
  height: 0px;
  padding: 0px !important;
  border-radius: 10px !important;
  justify-content: center !important;
  margin: 0 auto !important;
  overflow: hidden !important; // 추가된 코드
`;

export const PopupVideo = styled.video`
  position: absolute;
  top: 0px;
  width: 760pxpx;
  height: 515px;
  left: 0px;
`;

export const XImage = styled.img`
  width: 25px; // 사이즈 조절
  height: 25px;
  position: absolute;
  right: 30px; // 위치 조절
  top: 5px;
`;

export const Open = styled.div`
  display: flex;
  align-items: center;S
`;
