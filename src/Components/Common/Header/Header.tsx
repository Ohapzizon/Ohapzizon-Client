import React from "react";
import { isLoginModalOpen } from "../../../atoms";
import { useRecoilState } from "recoil";
import { LogoBlack } from "../../../Assets";
import * as s from "./Style";
import LoginModal from "../../Modal/LoginModal/LoginModal";

const Header = () => {
  const [loginModalIsOpen, setLoginModalIsOpen] =
    useRecoilState(isLoginModalOpen);

  function openLoginModal() {
    setLoginModalIsOpen(true);
  }

  return (
    <>
      <s.Positioner>
        <LogoBlack />
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
