import React from "react";
import * as i from "../../../Assets/index";
import * as s from "./Style";

const Googlebutton = () => {
  return (
    <>
      <s.Button>
        <i.Google />
      </s.Button>
      <s.Text>Google 로그인</s.Text>
    </>
  );
};

export default Googlebutton;
