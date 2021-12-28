import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 21.2%;
  height: 8%;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  padding: 2vh 1vh 1vh;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #454545;
  outline: none;

  &:focus + label,
  &:valid + label {
    top: 0%;
    font-size: 15px;
    color: #80b2ff;
  }
`;

export const Label = styled.label`
  position: absolute;
  left: 12px;
  top: 1.8vh;
  font-size: 18px;
  color: #cdcdcd;
  transition: all 0.5s ease;
`;
