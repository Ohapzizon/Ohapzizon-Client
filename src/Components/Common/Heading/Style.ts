import styled from "styled-components";
import Config from "../../../Constants/Config.json";

export const Positioner = styled.div`
  width: 100%;
  height: 70px;
  margin: 160px auto;
  margin-left: 64px;
  display: flex;
  flex-direction: column;
`;

export const HeadingTitle = styled.h1`
  font-size: 45px;
`;

export const HeadingText = styled.div`
  font-size: 20px;
  b {
    font-weight: 500;
    font-size: 25px;
  }
`;

export const RecruitBtn = styled.button`
  width: 140px;
  height: 100%;
  font-size: 18px;
  background-color: ${Config.COLOR.BLUE};
  color: ${Config.COLOR.WHITE};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  border: 0;
  border-radius: 5px;
`;
