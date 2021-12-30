import styled from "styled-components";
import Config from "../../../Constants/Config.json";

type StyleProps = {
  mode?: string;
};

export const Button = styled.button<StyleProps>`
  width: 120%;
  height: 30%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
  font-size: 1.3rem;
  font-weight: 400;
  background-color: ${(props) =>
    props.mode === "light"
      ? Config.lightTheme.bgColor
      : Config.darkTheme.bgColor};
  color: ${(props) =>
    props.mode === "light"
      ? Config.lightTheme.textColor
      : Config.darkTheme.textColor};
  border: 1px solid #c2c2c2;
  margin-top: 75px;
`;
