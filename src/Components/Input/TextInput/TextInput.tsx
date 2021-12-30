import React from "react";
import * as s from "./Style";

const TextInput: React.FC = () => {
  return (
    <s.TextInputWrapper>
      <s.Input placeholder="내용을 입력하세요" />
    </s.TextInputWrapper>
  );
};

export default TextInput;
