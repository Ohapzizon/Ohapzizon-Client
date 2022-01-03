import React from "react";
import * as s from "./Style";

const ActiveButton = () => {
  return (
    <s.Positioner>
      <s.ModifyButton>수정</s.ModifyButton>
      <s.DeleteButton>삭제</s.DeleteButton>
    </s.Positioner>
  );
};

export default ActiveButton;
