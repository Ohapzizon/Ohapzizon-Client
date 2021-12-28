import React from "react";
import * as i from "../../../Assets/index";
import * as s from "./Style";

const Googlebutton = () => {
  return (
    <s.Button>
      <i.Google />
      <p>Google 계정으로 로그인</p>
    </s.Button>
  );
};

export default Googlebutton;
