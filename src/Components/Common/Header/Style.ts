import styled from "styled-components";
import Config from "../../../Constants/Config.json";

export const Positioner = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  z-index: 1;
  top: 0;
  background-color: ${Config.COLOR.WHITE};

  svg {
    margin-left: 65px;
  }
`;

export const Nav = styled.nav`
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-weight: 500;
  margin-right: 70px;
  cursor: pointer;
`;
