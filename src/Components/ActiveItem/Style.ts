import styled from "styled-components";
import Config from "../../Constants/Config.json";

type StyleProps = {
  mode?: string;
};

export const Positioner = styled.div<StyleProps>`
  width: 350px;
  height: 350px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.active};
  box-shadow: 0px 0px 10px ${({ theme }) => theme.headerShadow};
  border-radius: 5px;
  color: ${({ theme }) => theme.text};

  &:hover {
    transform: scale(1.1);
    transition: 0.2s;
  }
`;

export const Title = styled.h3`
  font-size: 24px;
  font-family: "Noto Sans KR";
  margin-bottom: 5px;
`;

export const content = styled.span`
  width: 100%;
  height: 100%;
  font-family: "Noto Sans KR";
`;

export const TitleContainer = styled.div`
  height: 13%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  span {
    font-size: 26px;
  }
`;

export const Personnel = styled.div`
  display: flex;

  height: 7%;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  font-family: "Noto Sans KR";
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  cursor: pointer;
`;

export const InfoContainer = styled.div`
  width: 100%;
  height: 7%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;
