import styled from "styled-components";
import Config from "../../../Constants/Config.json";

type StyleProps = {
  visible?: boolean;
  mode?: string;
};

export const ModalOverlay = styled.div<StyleProps>`
  display: ${(props) => (props.visible ? "block" : "none")};
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${Config.COLOR.SUPERLIGHTGRAY};
  opacity: 0.1;
`;

export const ModalWrapper = styled.div<StyleProps>`
  display: ${(props) => (props.visible ? "block" : "none")};
  width: 45%;
  height: 80%;
  z-index: 1000;
  outline: 0;
  position: fixed;
  top: 10%;
  left: 28%;
  box-sizing: border-box;
  padding: 5rem;
  background-color: ${(props) =>
    props.mode === "light"
      ? Config.lightTheme.bgColor
      : Config.darkTheme.bgColor};
  border-radius: 10px;

  button {
    margin-left: 83.5%;
    margin-top: 1rem;
  }
`;

export const Title = styled.p<StyleProps>`
  width: 100%;
  height: 7%;
  font-size: 36px;
  font-weight: bold;
  color: ${(props) =>
    props.mode === "light"
      ? Config.lightTheme.textColor
      : Config.darkTheme.textColor};
`;

export const People = styled.p<StyleProps>`
  width: 100%;
  height: 3%;
  margin-top: 0.5rem;
  font-size: 16px;
  font-weight: bold;
  color: ${(props) =>
    props.mode === "light"
      ? Config.lightTheme.textColor
      : Config.darkTheme.textColor};
`;

export const TextViewer = styled.div`
  width: 100%;
  height: 85%;
  margin-top: 1rem;
  border-radius: 10px;
  border: 1.5px solid #dbdbdb;
`;

export const Text = styled.p`
  padding-top: 1rem;
  padding-left: 0.5rem;
  font-size: 16px;
  font-weight: bold;
  overflow: auto;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 5%;
`;
