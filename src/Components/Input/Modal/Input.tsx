import React from "react";
import * as s from "./Style";

type input = {
  type: string;
  value: string;
  onChange: (e: any) => void;
};

const Input: React.FC<input> = ({ type, value, onChange }) => {
  return (
    <s.Input
      type={type}
      autoComplete="off"
      placeholder="제목을 입력하세요"
      value={value}
      onChange={onChange}
      required
    />
  );
};

export default Input;
