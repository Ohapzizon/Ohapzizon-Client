import React from "react";
import * as s from "./Style";

type input = {
  type: string;
  label: string;
};

const Input: React.FC<input> = ({ type, label }) => {
  return (
    <>
      <s.InputWrapper>
        <s.Input type={type} autoComplete="off" required />
        <s.Label>{label}</s.Label>
      </s.InputWrapper>
    </>
  );
};

export default Input;
