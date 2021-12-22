import styled from "styled-components";
import Config from "../../Constants/Config.json";

export const LoginWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .button {
    margin-left: 1.4rem;
    margin-top: 1rem;
  }
`;

export const FindText = styled.p`
  width: 100%;
  height: 4rem;
  text-align: center;
  margin-left: 15.4%;
  margin-top: -1.5%;
  font-weight: bold;
  color: ${Config.COLOR.BLUE};
`;

export const ResisterText = styled.p`
  height: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Config.COLOR.BLACK};

  .blueText {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6%;
    height: 0%;
    color: ${Config.COLOR.BLUE};
    font-weight: bold;
  }
`;
