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
  background-color: ${Config.COLOR.WHITE};
  color: ${Config.COLOR.BLACK};
  border: 1px solid #c2c2c2;
  margin-top: 75px;
`;

export const Text = styled.p`
  font-size: 20px;
  margin-top: 2%;
`;
