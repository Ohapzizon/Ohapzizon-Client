import React from "react";
import { isLoginModalOpen } from "../../../atoms";
import { useRecoilState } from "recoil";
import * as s from "./Style";
import * as I from "../../../Assets/index";
import Googlebutton from "../../Button/GoogleButton/Googlebutton";
import useTheme from "../../../hooks/useTheme";
import { ThemeEnums } from "../../../enum/ThemeEnums";
import member from "../../../Api/member";

type modal = {
  visible: boolean;
};

interface ModalProps {
  modalObj: modal;
}

const onGoogleLogin = async () => {
  try {
    const res = await member.googleAuth();
    console.log(res);
  } catch (e) {}
};

const LoginModal: React.FC<ModalProps> = ({ modalObj }) => {
  const [loginModalIsClose, setLoginModalIsClose] =
    useRecoilState(isLoginModalOpen);
  const { currentTheme } = useTheme();

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
              {currentTheme === ThemeEnums.LIGHT ? (
                <I.LogoBlack />
              ) : (
                <I.LogoWhite />
              )}
              <Googlebutton onClick={onGoogleLogin} />
            </s.LoginWrapper>
          </s.ModalWrapper>
        </>
      )}
    </>
  );
};

export default LoginModal;
