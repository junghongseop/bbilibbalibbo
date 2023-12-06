import styled from "styled-components";

export const H1 = styled.h1`
  text-align: center;

  position: fixed;
  top: 100px;
  left: 90px;
`;

export const Body = styled.body`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 13% 0 0 0;
  flex-direction: column;
  height: 100vh; // 뷰포트 높이로 제한
  overflow: auto; // 스크롤 기능 추가
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
  position: absolute;
  top: 250px;
  left: -565px;
  width: 1140px;
  height: 110px;
  background: #ffffff;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  cursor: pointer;
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
  align-items: center;
  justify-content: flex-start;
  gap: 20px; // 페이지 사이의 간격
`;

export const Page = styled.div`
  position: relative;
  margin-top: ${(props) => (props.idx > 0 ? "114px" : "0px")};
`;

export const MiniTitle = styled.div`
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

export const Writer = styled.div`
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
