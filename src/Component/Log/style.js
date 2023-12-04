import styled from "styled-components";

export const LogImage = styled.img`
  width: 500px;
  height: auto;

  position: absolute; // position: fixed; 대신 position: absolute; 사용
  left: 400px;
  top: 300px;
`;

export const LogContainer = styled.div`
  display: flex;
  align-items: center;
  overflow: auto;
  height: 100vh;
  position: relative; // position: relative; 추가
`;
