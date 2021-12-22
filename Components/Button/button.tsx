import React from "react";
import * as s from "./Style";

type ButtonProps = {
  name: string;
  className: string;
};

interface Button {
  name: ButtonProps;
  className: ButtonProps;
}

const Button: React.FC<ButtonProps> = ({ className, name }) => {
  return (
    <>
      <s.Button className={className}>{name}</s.Button>
    </>
  );
};

export default Button;
