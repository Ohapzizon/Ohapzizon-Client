import React from "react";
import { theme } from "../../../atoms";
import { useRecoilValue } from "recoil";
import * as s from "./Style";

const TextInput: React.FC = () => {
  const themeMode = useRecoilValue(theme);
  return (
    <s.TextInputWrapper>
      <s.Input placeholder="내용을 입력하세요" required mode={themeMode} />
    </s.TextInputWrapper>
  );
};

export default TextInput;
