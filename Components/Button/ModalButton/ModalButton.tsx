import React, { useState } from "react";
import * as s from "./Style";

type modalbutton = {
  text: string;
  className: string;
};

const ModalButton: React.FC<modalbutton> = ({ text, className }) => {
  return (
    <>
      <s.Button className={className}>{text}</s.Button>
    </>
  );
};

export default ModalButton;
