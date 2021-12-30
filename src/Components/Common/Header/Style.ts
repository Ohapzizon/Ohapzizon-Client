import styled from "styled-components";
import Config from "../../../Constants/Config.json";

type StyleProps = {
  mode?: string;
};

export const Positioner = styled.header<StyleProps>`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 10px
    rgba(
      ${(props) =>
        props.mode === "light" ? "0, 0, 0, 0.1" : "255, 255, 255, 0.1"}
    );
  position: fixed;
  z-index: 1;
  top: 0;
  background-color: ${(props) =>
    props.mode === "light"
      ? Config.lightTheme.bgColor
      : Config.darkTheme.bgColor};
  color: ${(props) =>
    props.mode === "light"
      ? Config.lightTheme.textColor
      : Config.darkTheme.textColor};

  svg {
    margin-left: 5%;
  }
`;

export const Nav = styled.nav`
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-weight: 500;
  margin-right: 5%;
  cursor: pointer;
`;
