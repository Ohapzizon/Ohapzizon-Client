import styled from "styled-components";
import Config from "../../../Constants/Config.json";

type StyleProps = {
  mode?: string;
};

export const Positioner = styled.div<StyleProps>`
  display: flex;
  width: 80%;
  height: 200px;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 160px 5% 70px;
  color: ${Config.COLOR.BLACK};
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
  width: 150px;
  height: 25%;
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
