import styled from "styled-components";
import Config from "../../../Constants/Config.json";

export const Button = styled.button`
  display: flex;
  text-align: center;
  width: 22.3%;
  height: 7%;
  border-radius: 10px;
  font-size: 1.3rem;
  font-weight: 400;
  background-color: ${Config.COLOR.WHITE};
  color: ${Config.COLOR.BLACK};

  p {
    width: 50%;
    height: 0%;
    margin-top: 5.4%;
  }
  .google {
    margin-top: 3.7%;
  }
  .items {
    margin-left: 12%;
  }
`;
