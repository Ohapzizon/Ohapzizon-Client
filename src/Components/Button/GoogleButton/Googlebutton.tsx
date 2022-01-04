import React from "react";
import * as i from "../../../Assets/index";
import * as s from "./Style";

type ButtonProps = {
  onClick: (e: any) => void;
};

const Googlebutton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <>
      <s.Button onClick={onClick}>
        <i.Google />
      </s.Button>
      <s.Text>Google 로그인</s.Text>
    </>
  );
};

export default Googlebutton;
