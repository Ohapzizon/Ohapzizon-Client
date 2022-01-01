import styled from "styled-components";
import Config from "../../../Constants/Config.json";

type StyleProps = {
  mode?: string;
};

export const Button = styled.button<StyleProps>`
  width: 37%;
  height: 37%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
  font-size: 1.3rem;
  font-weight: 400;
  background-color: ${({ theme }) => theme.active};
  color: ${Config.COLOR.BLACK};
  border: 0;
  box-shadow: 0px 0px 4px ${({ theme }) => theme.googleButtonShadow};
  margin-top: 75px;
`;

export const Text = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.text};
  margin-top: 2%;
`;
