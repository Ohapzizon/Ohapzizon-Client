import React, { useState } from "react";
import * as s from "./Style";

type modalbutton = {
  text: string;
  btnType: string;
  onClick?: (e) => void;
};

const ModalButton: React.FC<modalbutton> = ({ text, btnType, onClick }) => {
  return (
    <s.Button onClick={onClick} btnType={btnType}>
      {text}
    </s.Button>
  );
};

export default ModalButton;
