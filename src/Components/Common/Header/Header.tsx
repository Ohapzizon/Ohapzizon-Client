import React from "react";
import { LogoBlack } from "../../../Assets";
import * as s from "./Style";

const Header = () => {
  return (
    <s.Positioner>
      <LogoBlack />
      <s.Nav>로그인</s.Nav>
    </s.Positioner>
  );
};

export default Header;
