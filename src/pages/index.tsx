import dynamic from "next/dynamic";

const Header = dynamic(() => import("../Components/Common/Header/Header"), {
  ssr: false,
});
const Heading = dynamic(() => import("../Components/Common/Heading/Heading"), {
  ssr: false,
});
const Active = dynamic(() => import("../Components/Active/Active"), {
  ssr: false,
});
const ThemeButton = dynamic(
  () => import("../Components/Button/ThemeButton/ThemeButton"),
  { ssr: false },
);
const Footer = dynamic(() => import("../Components/Common/Footer/Footer"));

export default function Home() {
  return (
    <>
      <Header />
      <Heading />
      <Active />
      <ThemeButton />
      <Footer />
    </>
  );
}
