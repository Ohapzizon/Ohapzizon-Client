import styled from "styled-components";

export const Positioner = styled.button`
  position: fixed;
  width: 75px;
  height: 75px;
  bottom: 50px;
  right: 50px;
  border: 3px solid ${({ theme }) => theme.themeButton};
  border-radius: 10px;
  background: none;
`;
