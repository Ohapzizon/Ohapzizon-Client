import styled from "styled-components";

export const Positioner = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 100px;
  justify-items: center;
  margin: 100px auto;

  @media screen and (max-width: 1414px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 1065px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 710px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
