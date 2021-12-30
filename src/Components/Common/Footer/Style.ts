import styled from "styled-components";
import Config from "../../../Constants/Config.json";

export const Positioner = styled.footer`
  margin: 20px 5%;
  border-top: 3px solid ${Config.COLOR.LIGHTBLUE};
  font-style: italic;

  p {
    color: ${Config.COLOR.LIGHTBLUE};
    font-weight: bold;
    font-size: 16px;
  }
`;

export const FooterTextWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
`;
export const FooterText = styled.div`
  color: ${Config.COLOR.LIGHTBLUE};
  font-weight: bold;
  font-size: 16px;

  span {
    color: ${Config.COLOR.BLUE};
  }
`;
