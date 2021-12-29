import React, { useState } from "react";
import * as s from "./Style";

type modalbutton = {
  text: string;
  className: string;
  onClick?: (e) => void;
};

const ModalButton: React.FC<modalbutton> = ({ text, className, onClick }) => {
  return (
    <s.Button className={className} onClick={onClick}>
      {text}
    </s.Button>
  );
};

export default ModalButton;
