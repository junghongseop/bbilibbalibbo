import styled from "styled-components";

export const AllContainer = styled.div`
  /* 필요한 스타일을 여기에 추가하세요. 없다면 이대로 둬도 괜찮습니다. */
`;

export const LogImage = styled.img`
  width: 400px;
  height: 300px;
  position: absolute;
  left: 300px;
  top: 103px;
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
  height: 50vh;
  position: relative;
`;

export const Button = styled.img`
  width: auto;
  height: auto;
  position: absolute;
  right: 450px;
  top: 170px;
`;

export const TempImage = styled.img`
  width: 400px;
  height: 300px;
  position: absolute;
  left: 300px;
  top: -342px;
`;

export const TempContainer = styled.div`
  display: flex;
  align-items: center;
  height: 0vh;
  position: relative;
`;

export const Body = styled.div`
  position: relative;
  top: 90px;
  left: 50%;
`;

export const Temperature = styled.div`
  position: relative;
  bottom: 215px;
  right: 417px;
  font-size: 22px;
  font-weight: bold;
`;

export const OpenImage = styled.img`
  width: 180px;
  height: auto;
  position: absolute;
  left: 303px;
  top: -520px;
`;

export const CloseImage = styled.img`
  width: 180px;
  height: auto;
  position: absolute;
  left: 515px;
  top: -520px;
`;

export const Open = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const Close = styled.div`
  display: flex;
  align-items: center;
  position: relative;
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

export const PopupImage = styled.img`
  position: absolute;
  top: -1015px;
  width: 700px;
  height: 2500px;
`;

export const XImage = styled.img`
  width: 25px; // 사이즈 조절
  height: 25px;
  position: absolute;
  right: 30px; // 위치 조절
  top: 25px;
`;
