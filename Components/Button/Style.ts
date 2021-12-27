import styled from "styled-components";
import Config from "../../Constants/Config.json";

export const Button = styled.button`
  text-align: center;
  width: 22.3%;
  height: 7%;
  border-radius: 10px;
  border: none;
  font-size: 1.3rem;
  font-weight: bold;
  background-color: ${Config.COLOR.BLUE};
  color: ${Config.COLOR.WHITE};
`;
