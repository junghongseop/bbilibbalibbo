import styled from "styled-components";

export const Body = styled.body`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 13% 0 0 0;
  flex-direction: column;
  height: 90vh; // 뷰포트 높이로 제한
`;

export const LogItem = styled.div`
  border: 1px solid #ccc;
  margin: 10px;
  padding: 10px;
  width: 50%;
  text-align: left;
  height: 100px;
`;

export const LogText = styled.p`
  margin: 0;
`;

export const PageBox = styled.div`
  position: relative;
  top: 8000px;
  left: 0px;
  width: 600px;
  height: 10px;
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
  display: grid;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;

export const Page = styled.div`
  position: relative;
  margin-top: 100px;
`;

export const Type = styled.div`
  position: absolute;
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

export const Logid = styled.div`
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
