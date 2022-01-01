import { DefaultTheme } from "styled-components";
import Config from "../Constants/Config.json";

export const LightTheme: DefaultTheme = {
  background: "#FFFFFF",
  text: "#333333",
  active: "#FFFFFF",
  themeButton: "#E9C300",
  headerShadow: "rgba(0, 0, 0, 0.1)",
  googleButtonShadow: "rgba(0, 0, 0, 0.4)",
};

export const DarkTheme: DefaultTheme = {
  background: "#292929",
  text: "#FFFFFF",
  active: "#1B1D1F",
  themeButton: "#955CFF",
  headerShadow: "rgba(255, 255, 255, 0.1)",
  googleButtonShadow: "rgba(255, 255, 255, 0.4)",
};
