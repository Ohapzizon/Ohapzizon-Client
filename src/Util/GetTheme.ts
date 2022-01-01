import Storage from "./Storage";
import { ThemeEnums } from "../enum/ThemeEnums";
import Config from "../Constants/Config.json";

const { LIGHT, DARK } = ThemeEnums;

export const getTheme = () => {
  const theme: number = Number(Storage.get(Config.KEY.THEME));
  if (typeof window !== "undefined" && theme === null) {
    const system = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return system ? DARK : LIGHT;
  }
  return theme === DARK ? DARK : LIGHT;
};
