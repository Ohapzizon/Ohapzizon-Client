import styled from "styled-components";
import Config from "../../../Constants/Config.json";

export const Button = styled.button`
  width: 7%;
  height: 20%;
  margin-right: 1vh;
  border-radius: 5px;
  border: none;
  font-size: 18px;
  font-weight: bold;
  font-style: italic;
  color: ${Config.COLOR.WHITE};
  background-color: ${(props) =>
    props.className === "cancel" ? Config.COLOR.GRAY : Config.COLOR.BLUE};
`;
