import styled from "styled-components";
import Config from "../../../Constants/Config.json";

export const Positioner = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
`;

export const ModifyButton = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background-color: ${Config.COLOR.BLUE};
  border-radius: 0px 0px 0px 5px;
  color: ${Config.COLOR.WHITE};
  font-family: "Noto Sans KR";
  font-weight: bold;
  font-size: 25px;
  &:hover {
    transform: scale(1.1);
    transition: 0.2s;
  }
`;

export const DeleteButton = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background-color: ${Config.COLOR.RED};
  border-radius: 0px 0px 5px 0px;
  color: ${Config.COLOR.WHITE};
  font-family: "Noto Sans KR";
  font-weight: bold;
  font-size: 25px;
  &:hover {
    transform: scale(1.1);
    transition: 0.2s;
  }
`;
