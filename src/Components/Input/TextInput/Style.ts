import styled from "styled-components";
import Config from "../../../Constants/Config.json";

type StyleProps = {
  visible?: boolean;
  mode?: string;
};

export const TextInputWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 2vh;
`;

export const Input = styled.textarea<StyleProps>`
  width: 100%;
  height: 90%;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  color: ${Config.COLOR.BLACK};
  resize: none;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};

  ::placeholder {
    font-size: 16px;
    font-weight: bold;
    color: #989898;
  }
`;
