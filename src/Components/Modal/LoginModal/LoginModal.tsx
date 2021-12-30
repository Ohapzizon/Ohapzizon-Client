import React from "react";
import { isLoginModalOpen } from "../../../atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { theme } from "../../../atoms";
import * as s from "./Style";
import * as I from "../../../Assets/index";
import Googlebutton from "../../../Components/Button/GoogleButton/Googlebutton";

type modal = {
  visible: boolean;
};

interface ModalProps {
  modalObj: modal;
}

const LoginModal: React.FC<ModalProps> = ({ modalObj }) => {
  const themeMode = useRecoilValue(theme);
  const [loginModalIsClose, setLoginModalIsClose] =
    useRecoilState(isLoginModalOpen);

  function onClose() {
    setLoginModalIsClose(false);
  }

  return (
    <>
      {!loginModalIsClose ? null : (
        <>
          <s.ModalOverlay
            visible={modalObj.visible}
            onClick={onClose}
            mode={themeMode}
          />
          <s.ModalWrapper visible={modalObj.visible}>
            <s.LoginWrapper>
              {themeMode === "light" ? <I.LogoBlack /> : <I.LogoWhite />}
              <Googlebutton />
            </s.LoginWrapper>
          </s.ModalWrapper>
        </>
      )}
    </>
  );
};

export default LoginModal;
