import styled from "styled-components";
import Config from "../../Constants/Config.json";

export const Button = styled.button`
  width: 27.3%;
  height: 5%;
  border-radius: 10px;
  border: none;
  font-size: 1.7rem;
  background-color: ${Config.COLOR.BLUE};
  color: ${Config.COLOR.WHITE};
`;
