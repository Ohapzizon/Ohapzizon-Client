import React from "react";
import { isLoginModalOpen } from "../../../atoms";
import { useRecoilState } from "recoil";
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
  const [loginModalIsClose, setLoginModalIsClose] =
    useRecoilState(isLoginModalOpen);

  function onClose() {
    setLoginModalIsClose(false);
  }

  return (
    <>
      {!loginModalIsClose ? null : (
        <>
          <s.ModalOverlay visible={modalObj.visible} onClick={onClose} />
          <s.ModalWrapper visible={modalObj.visible}>
            <s.LoginWrapper>
              <I.LogoBlack />
              <Googlebutton />
            </s.LoginWrapper>
          </s.ModalWrapper>
        </>
      )}
    </>
  );
};

export default LoginModal;
