import styled from "styled-components";
import Config from "../../Constants/Config.json";

export const Positioner = styled.div`
  width: 350px;
  height: 350px;
  display: flex;
  flex-direction: column;
  background-color: ${Config.COLOR.WHITE};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`;

export const Title = styled.h3`
  font-size: 24px;
  font-family: "Noto Sans KR";
`;

export const content = styled.span`
  width: 100%;
  height: 100%;
  font-family: "Noto Sans KR";
`;

export const TitleContainer = styled.div`
  height: 9%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Personnel = styled.div`
  display: flex;

  height: 7%;
  border-radius: 10px;
  margin-bottom: 15px;
  font-size: 14px;
  font-weight: 600;
  font-family: "Noto Sans KR";
`;

export const PullButton = styled.button`
  width: 100%;
  height: 20%;
  border: none;
  background-color: ${Config.COLOR.BLUE};
  border-radius: 0px 0px 5px 5px;
  color: ${Config.COLOR.WHITE};
  font-family: "Noto Sans KR";
  font-weight: bold;
  font-size: 25px;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  cursor: pointer;
`;
