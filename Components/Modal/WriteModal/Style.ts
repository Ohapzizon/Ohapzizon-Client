import styled from "styled-components";
import Config from "../../../Constants/Config.json";

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Dropdown = styled.div`
  display: flex;
  margin-top: 0.7%;
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
  width: 4%;
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
  height: 13rem;
  margin-left: 26.6%;
  margin-top: 1.2vh;
`;
