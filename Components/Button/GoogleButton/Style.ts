import styled from "styled-components";
import Config from "../../../Constants/Config.json";

export const Button = styled.button`
  display: flex;
  text-align: center;
  width: 22.3%;
  height: 5vh;
  border-radius: 10px;
  font-size: 1.3rem;
  font-weight: 400;
  background-color: ${Config.COLOR.WHITE};
  color: ${Config.COLOR.BLACK};

  p {
    margin-top: 2.8%;
  }
  .google {
    margin-top: 1.4%;
  }
  .items {
    margin-left: 12%;
  }
`;
