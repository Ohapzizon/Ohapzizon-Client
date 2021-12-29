// pages/_app.tsx
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { GlobalStyle } from "../styles/GlobalStyle";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}

export default App;
