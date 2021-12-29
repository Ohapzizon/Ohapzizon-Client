import styled from "styled-components";

export const Positioner = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 350px);
  padding: 0 5% 5%;
  justify-content: space-between;
  row-gap: 100px;

  @media screen and (max-width: 1414px) {
    grid-template-columns: repeat(3, 350px);
  }
  @media screen and (max-width: 1065px) {
    grid-template-columns: repeat(2, 350px);
  }
  @media screen and (max-width: 710px) {
    grid-template-columns: repeat(1, 350px);
  }
`;
