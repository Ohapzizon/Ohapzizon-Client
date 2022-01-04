import React from "react";
import { isLoginModalOpen } from "../../../atoms";
import { useRecoilState } from "recoil";
import { LogoBlack, LogoWhite } from "../../../Assets";
import * as s from "./Style";
import LoginModal from "../../Modal/LoginModal/LoginModal";
import useTheme from "../../../hooks/useTheme";
import { ThemeEnums } from "../../../enum/ThemeEnums";

const Header = () => {
  const [loginModalIsOpen, setLoginModalIsOpen] =
    useRecoilState(isLoginModalOpen);
  const { currentTheme } = useTheme();

  function openLoginModal() {
    setLoginModalIsOpen(true);
  }

  return (
    <>
      <s.Positioner>
        {currentTheme === ThemeEnums.LIGHT ? <LogoBlack /> : <LogoWhite />}
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
