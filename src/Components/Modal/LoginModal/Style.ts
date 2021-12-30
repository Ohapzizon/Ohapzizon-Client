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
  opacity: 0.5;
`;

export const ModalWrapper = styled.div<StyleProps>`
  display: ${(props) => (props.visible ? "block" : "none")};
  width: 25%;
  height: 40%;
  z-index: 1000;
  outline: 0;
  position: fixed;
  top: 27%;
  left: 37%;
  box-sizing: border-box;
  padding: 5rem;
  background-color: ${Config.COLOR.WHITE};
  border-radius: 10px;
`;

export const LoginWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
