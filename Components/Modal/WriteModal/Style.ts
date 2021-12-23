import styled from "styled-components";
import Config from "../../../Constants/Config.json";

export const ModalWrapper = styled.div``;

export const Dropdown = styled.div`
  display: flex;
  margin-top: 0.7%;

  p {
    font-size: 18px;
    font-weight: bold;
    color: #989898;
  }
`;

export const DropdownSelect = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -0.3vh;

  margin-left: 0.5%;
  width: 4%;
  height: 2.7vh;
  border-radius: 3px;
  background-color: ${Config.COLOR.BLUE};

  span {
    color: ${Config.COLOR.WHITE};
    font-weight: bold;
    margin-right: -1vh;
  }

  .Image {
    margin-left: 2vh;
    cursor: pointer;
  }
`;

export const ButtonWrapper = styled.div`
  margin-left: 25.7%;
  margin-top: 1.2vh;
`;
