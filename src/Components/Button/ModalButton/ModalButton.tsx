import React, { useState } from "react";
import * as s from "./Style";

type modalbutton = {
  text: string;
  className: string;
};

const ModalButton: React.FC<modalbutton> = ({ text, className }) => {
  function isClosed() {
    alert("버튼 눌림");
  }

  return (
    <>
      <s.Button className={className} onClick={isClosed}>
        {text}
      </s.Button>
    </>
  );
};

export default ModalButton;
