import React from "react";
import { isLoginModalOpen } from "../../../atoms";
import { useRecoilValue, useRecoilState } from "recoil";
import { LogoBlack, LogoWhite } from "../../../Assets";
import { theme } from "../../../atoms";
import * as s from "./Style";
import LoginModal from "../../Modal/LoginModal/LoginModal";

const Header = () => {
  const themeMode = useRecoilValue(theme);
  const [loginModalIsOpen, setLoginModalIsOpen] =
    useRecoilState(isLoginModalOpen);

  function openLoginModal() {
    setLoginModalIsOpen(true);
  }

  return (
    <>
      <s.Positioner mode={themeMode}>
        {themeMode === "light" ? <LogoBlack /> : <LogoWhite />}
        <s.Nav onClick={openLoginModal}>로그인</s.Nav>
      </s.Positioner>
      {loginModalIsOpen && (
        <LoginModal
          modalObj={{
            visible: loginModalIsOpen,
          }}
        />
      )}
    </>
  );
};

export default Header;
