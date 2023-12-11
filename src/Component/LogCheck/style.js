import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  height: 100%; // 뷰포트 높이로 제한
`;

export const PageBox = styled.div`
  position: relative;
  left: 400px;
  width: 1100px;
  height: 110px;
  top: 200px;
`;

export const Type = styled.div`
  position: relative;
  width: 458px;
  height: 44px;
  left: 54px;
  top: 51px;
  font-weight: 600;
  font-size: 26px;
  line-height: 44px;
  align-items: center;
  color: #000000;
`;

export const Log = styled.div`
  position: absolute;
  width: 205px;
  height: 22px;
  left: 455px;
  top: 67px;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  align-items: center;
  text-align: left;
  color: #565656;
`;

export const Date = styled.div`
  position: absolute;
  width: 400px;
  height: 22px;
  left: 55px;
  top: 26px;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  align-items: center;
  text-align: left;
  color: #565656;
`;

export const Title = styled.div`
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

export const PagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;
