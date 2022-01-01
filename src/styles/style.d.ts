import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    text: string;
    active: string;
    themeButton: string;
    headerShadow: string;
  }
}
