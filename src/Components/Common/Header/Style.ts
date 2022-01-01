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
  box-shadow: 0 4px 10px ${({ theme }) => theme.headerShadow};
  position: fixed;
  z-index: 1;
  top: 0;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};

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
