import React from "react";
import * as s from "./Style";

const Button = ({ className }) => {
  return (
    <>
      <s.Button className={className}>로그인</s.Button>
    </>
  );
};

export default Button;
