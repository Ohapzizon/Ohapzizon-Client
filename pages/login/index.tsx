import React from "react";
import * as s from "./Style";
import * as I from "../../Assets/index";
import Button from "../../Components/Button/button";
import Input from "../../Components/Input/input";
import Googlebutton from "../../Components/Button/GoogleButton/Googlebutton";

const login = () => {
  return (
    <s.LoginWrapper>
      <I.LogoBlack />
      <Input type="text" label="아이디" />
      <Input type="password" label="비밀번호" />
      <s.FindText>비밀번호를 잊으셨나요?</s.FindText>
      <Button className="button" />
      <Googlebutton className="button" />
      <s.ResisterText>
        아직도 가입 안했어? <p className="blueText">회원가입하기</p>
      </s.ResisterText>
    </s.LoginWrapper>
  );
};

export default login;
