import React from "react";
import * as s from "./Style";

const TextInput: React.FC = () => {
  return (
    <s.TextInputWrapper>
      <s.Input autoComplete="off" placeholder="내용을 입력하세요" required />
    </s.TextInputWrapper>
  );
};

export default TextInput;
