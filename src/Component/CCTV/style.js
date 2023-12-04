import style from "styled-components";

export const CctvImage = style.img`
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  background: #fff;

  position: relative;
  top: 89px;
`;

export const VectorContainer = style.div`
  display: flex;
  align-items: center;
`;

export const VectorText = style.span`
  color: #000;
  font-family: Inter;
  font-size: 25px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin-left: 5px;

  position: fixed;
  left: 120px;
  `;

export const VectorImage = style.img`
  width: auto;
  height: auto;
  flex-shrink: 1;

  position: fixed;
  left: 340px;
  top: 600px;
`;
