import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { isOpened } from "../../atoms";
import ViewModal from "../Modal/ViewModal/ViewModal";
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
  const [modal, setModal] = useRecoilState(isOpened);

  function onClicked() {
    setModal(true);
  }

  return (
    <>
      <s.Positioner>
        <s.ContentContainer onClick={onClicked}>
          <s.TitleContainer>
            <s.Title>{activeObj.title}</s.Title>
            <span>☀️</span>
          </s.TitleContainer>
          <s.Personnel>👤 {activeObj.people}명</s.Personnel>
          <s.content>{activeObj.content}</s.content>
        </s.ContentContainer>
        <s.PullButton>땡겨!!!!!</s.PullButton>
      </s.Positioner>
      {modal && (
        <ViewModal
          modalObj={{
            id: 1,
            title: "축구 할 사람",
            people: 18,
            content:
              "저기 운동장에서 축구 한판 땡길분들 밥 얼른 먹고 축구화나 챙겨서 나오세요~",
            visible: modal,
          }}
        />
      )}
    </>
  );
};

export default ActiveItem;
