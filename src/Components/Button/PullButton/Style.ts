import styled from "styled-components";
import Config from "../../../Constants/Config.json";

export const PullButton = styled.button`
  width: 100%;
  height: 20%;
  border: none;
  background-color: ${Config.COLOR.BLUE};
  border-radius: 0px 0px 5px 5px;
  color: ${Config.COLOR.WHITE};
  font-family: "Noto Sans KR";
  font-weight: bold;
  font-size: 25px;
`;
