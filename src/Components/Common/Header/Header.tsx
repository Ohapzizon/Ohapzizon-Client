import React from "react";
import { useRecoilValue } from "recoil";
import { LogoBlack, LogoWhite } from "../../../Assets";
import { theme } from "../../../atoms";
import * as s from "./Style";

const Header = () => {
  const themeMode = useRecoilValue(theme);
  return (
    <s.Positioner mode={themeMode}>
      {themeMode === "light" ? <LogoBlack /> : <LogoWhite />}
      <s.Nav>로그인</s.Nav>
    </s.Positioner>
  );
};

export default Header;
