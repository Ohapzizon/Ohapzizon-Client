import React from "react";
import * as i from "../../../Assets/index";
import * as s from "./Style";

const Googlebutton = ({ className }) => {
  return (
    <s.Button className={className}>
      <i.Google className="google items" />
      <p className="items">Google 계정으로 로그인</p>
    </s.Button>
  );
};

export default Googlebutton;
