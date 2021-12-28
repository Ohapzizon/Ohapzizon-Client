import styled from "styled-components";
import Config from "../../../Constants/Config.json";

export const TextInputWrapper = styled.div`
  margin-top: 2vh;
`;

export const Input = styled.textarea`
  width: 40.8%;
  height: 50vh;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  color: ${Config.COLOR.BLACK};
  resize: none;

  ::placeholder {
    font-size: 16px;
    font-weight: bold;
    color: #989898;
  }
`;
