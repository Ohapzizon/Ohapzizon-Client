import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 40.1%;
  height: 20%;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  padding: 2vh 1vh 1vh;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #989898;
  outline: none;
  font-size: 36px;
  font-weight: bold;
  color: #989898;

  ::placeholder {
    font-size: 36px;
    font-weight: bold;
    color: #989898;
  }
`;
