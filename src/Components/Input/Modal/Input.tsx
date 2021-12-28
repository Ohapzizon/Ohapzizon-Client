import React from "react";
import * as s from "./Style";

type input = {
  type: string;
};

const Input: React.FC<input> = ({ type }) => {
  return (
    <>
      <s.InputWrapper>
        <s.Input
          type={type}
          autoComplete="off"
          placeholder="제목을 입력하세요"
          required
        />
      </s.InputWrapper>
    </>
  );
};

export default Input;
