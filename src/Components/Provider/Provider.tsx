import React from "react";
import { ThemeProvider } from "styled-components";
import useTheme from "../../hooks/useTheme";
import { GlobalStyle } from "../../styles/GlobalStyle";

const Provider = ({ Component, pageProps }: any) => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme.theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default Provider;
