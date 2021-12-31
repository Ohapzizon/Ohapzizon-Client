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
  opacity: 0.4;
`;

export const ModalWrapper = styled.div<StyleProps>`
  width: 45%;
  height: 80%;
  display: ${(props) => (props.visible ? "block" : "none")};
  z-index: 1000;
  position: fixed;
  top: 10%;
  left: 28%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: ${({ theme }) => theme.background};
  border-radius: 10px;
`;

export const Dropdown = styled.div`
  display: flex;
  margin-top: 1.3vh;
  position: relative;

  p {
    font-size: 18px;
    font-weight: bold;
    color: #989898;
  }

  &:hover + .lists {
    opacity: 1;
    visibility: visible;
  }
`;

export const DropdownSelect = styled.select`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -0.43vh;

  margin-left: 0.5%;
  width: 10%;
  height: 2rem;
  border-radius: 3px;
  background-color: ${Config.COLOR.BLUE};
  color: ${Config.COLOR.WHITE};
  font-size: 18px;
  font-weight: bold;

  .icon {
    cursor: pointer;
  }
`;
export const DropdownOption = styled.option`
  padding: 1rem;
  margin-left: 2vh;
  color: ${Config.COLOR.WHITE};
  font-size: 18px;
  font-weight: bold;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 6%;
  margin-left: 65.3%;
  margin-top: -4vh;
`;
