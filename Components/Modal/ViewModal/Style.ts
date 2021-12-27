import styled from "styled-components";
import Config from "../../../Constants/Config.json";

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Title = styled.p`
  font-size: 36px;
  font-family: "Poppins";
  font-weight: bold;
  font-style: italic;
  color: ${Config.COLOR.BLACK};
`;

export const People = styled.p`
  margin-top: 0.5rem;
  font-size: 16px;
  font-family: "Poppins";
  font-weight: bold;
  font-style: italic;
  color: ${Config.COLOR.BLACK};
`;

export const TextViewer = styled.div`
  width: 40.8%;
  height: 50vh;
  margin-top: 1rem;
  border-radius: 10px;
  border: 1.5px solid #dbdbdb;
`;

export const Text = styled.p`
  margin-top: 1rem;
  margin-left: 0.5rem;
  font-size: 16px;
  font-family: "Noto Sans KR";
  font-weight: bold;
  font-style: italic;
`;
export const ButtonWrapper = styled.div`
  width: 100%;
  height: 13rem;
  margin-left: 34%;
  margin-top: 1.2vh;
`;
