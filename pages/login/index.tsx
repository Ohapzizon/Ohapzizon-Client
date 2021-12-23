import React from "react";
import * as s from "./Style";
import * as I from "../../Assets/index";
import Googlebutton from "../../Components/Button/GoogleButton/Googlebutton";
import ModalButton from "../../Components/Button/ModalButton/ModalButton";

const login = () => {
  return (
    <s.LoginWrapper>
      <I.LogoBlack />
      <Googlebutton />
    </s.LoginWrapper>
  );
};

export default login;
