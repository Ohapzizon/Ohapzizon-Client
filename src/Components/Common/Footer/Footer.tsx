import React from "react";
import * as i from "../../../Assets";
import * as s from "./Style";

const Footer = () => {
  const memeber = ["ChangGyu", "TaeHwan", "HyunIn", "YouHyun"];
  return (
    <s.Positioner>
      <s.FooterTextWrapper>
        <s.FooterText>
          <span>Ohapzizon: </span>
          {memeber.sort().join(", ")}
        </s.FooterText>
        <s.FooterText>
          <span>Email: </span>
          ohapzizon.public@gmail.com
        </s.FooterText>
        <s.FooterText>
          <span>Github: </span>
          https://github.com/Ohapzizon
        </s.FooterText>
      </s.FooterTextWrapper>
      <p>© 2021, Ohapzizon</p>
    </s.Positioner>
  );
};

export default Footer;
