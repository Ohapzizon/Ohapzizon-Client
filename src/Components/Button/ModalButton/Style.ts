import styled from "styled-components";
import Config from "../../../Constants/Config.json";

type StyleProps = {
  btnType: string;
};

export const Button = styled.button<StyleProps>`
  width: 17%;
  height: 5%;
  margin-right: 1vh;
  border-radius: 5px;
  border: none;
  font-size: 18px;
  font-weight: bold;
  font-style: italic;
  color: ${Config.COLOR.WHITE};
  background-color: ${(props) =>
    props.btnType === "cancel" ? Config.COLOR.GRAY : Config.COLOR.BLUE};
`;
