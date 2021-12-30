import styled from "styled-components";
import Config from "../../../Constants/Config.json";

type StyleProps = {
  btnType: string;
};

export const Button = styled.button<StyleProps>`
  width: 17%;
  height: 100%;
  margin-right: 1vh;
  border-radius: 5px;
  border: none;
  font-size: 18px;
  font-weight: bold;
  color: ${Config.COLOR.WHITE};
  background-color: ${(props) =>
    props.btnType === "cancel"
      ? Config.COLOR.SUPERLIGHTGRAY
      : Config.COLOR.BLUE};

  &:hover {
    background-color: ${(props) =>
      props.btnType === "cancel"
        ? Config.COLOR.SUPERLIGHTGRAY
        : Config.COLOR.DARKBLUE};
    transition: 0.5s;
  }
`;
