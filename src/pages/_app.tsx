// pages/_app.tsx
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Provider from "../Components/Provider/Provider";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <Provider Component={Component} pageProps={pageProps} />
      </RecoilRoot>
    </>
  );
}

export default App;
