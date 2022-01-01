import React from "react";
import * as s from "./Style";
import * as i from "../../../Assets";
import useTheme from "../../../hooks/useTheme";
import { ThemeEnums } from "../../../enum/ThemeEnums";

const { LIGHT, DARK } = ThemeEnums;

const ThemeButton = () => {
  const { currentTheme, handleChangeTheme } = useTheme();
  return (
    <s.Positioner onClick={() => handleChangeTheme()}>
      {currentTheme === LIGHT ? <i.Sun /> : <i.Moon />}
    </s.Positioner>
  );
};

export default ThemeButton;
