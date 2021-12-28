import React from "react";
import * as s from "./Style";

type activeItem = {
  title: string;
  people: number;
  content: string;
};

interface ActiveProps {
  activeObj: activeItem;
}

const ActiveItem: React.FC<ActiveProps> = ({ activeObj }) => {
  return (
    <s.Positioner>
      <s.ContentContainer>
        <s.TitleContainer>
          <s.Title>{activeObj.title}</s.Title>
          <span>☀️</span>
        </s.TitleContainer>
        <s.Personnel>👤 {activeObj.people}명</s.Personnel>
        <s.content>{activeObj.content}</s.content>
      </s.ContentContainer>
      <s.PullButton>땡겨!!!!!</s.PullButton>
    </s.Positioner>
  );
};

export default ActiveItem;
