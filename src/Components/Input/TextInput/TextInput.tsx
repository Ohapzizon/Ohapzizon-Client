import React from "react";
import * as s from "./Style";

type input = {
  value?: string;
  onChange?: (e: any) => void;
};

const TextInput: React.FC<input> = ({ value, onChange }) => {
  return (
    <s.TextInputWrapper>
      <s.Input
        placeholder="내용을 입력하세요"
        value={value}
        onChange={onChange}
      />
    </s.TextInputWrapper>
  );
};

export default TextInput;
