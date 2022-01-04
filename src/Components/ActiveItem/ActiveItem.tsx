import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { isModifyModalOpen, isOpen } from "../../atoms";
import ViewModal from "../Modal/ViewModal/ViewModal";
import * as s from "./Style";
import PullButton from "../Button/PullButton/PullButton";
import ActiveButton from "../Button/ActiveButton/ActiveButton";
import ModifyModal from "../Modal/ModifyModal/Modifymodal";

type activeItem = {
  id: number;
  title: string;
  name: string;
  people: number;
  content: string;
};

interface ActiveProps {
  activeObj: activeItem;
}

const ActiveItem: React.FC<ActiveProps> = ({ activeObj }) => {
  const [modalIsOpen, setModalIsOpen] = useRecoilState(isOpen);
  const [openModifyModal, setOpenModifyModal] =
    useRecoilState(isModifyModalOpen);

  function openModal() {
    setModalIsOpen(true);
  }

  return (
    <>
      <s.Positioner>
        <s.ContentContainer onClick={openModal}>
          <s.TitleContainer>
            <s.Title>{activeObj.title}</s.Title>
            <span>☀️</span>
          </s.TitleContainer>
          <s.InfoContainer>
            <s.Personnel>👥 {activeObj.people}명</s.Personnel>
            <span>{activeObj.name}</span>
          </s.InfoContainer>
          <s.content>{activeObj.content}</s.content>
        </s.ContentContainer>
        <ActiveButton onClick={(e) => setOpenModifyModal(true)} />
      </s.Positioner>
      {modalIsOpen && (
        <ViewModal
          modalObj={{
            id: 1,
            title: "축구 할 사람",
            people: 18,
            content:
              "저기 운동장에서 축구 한판 땡길분들 밥 얼른 먹고 축구화나 챙겨서 나오세요~",
            visible: modalIsOpen,
          }}
        />
      )}
      {openModifyModal && (
        <ModifyModal
          modalObj={{
            id: 1,
            title: "축구 할 사람",
            people: 18,
            content:
              "저기 운동장에서 축구 한판 땡길분들 밥 얼른 먹고 축구화나 챙겨서 나오세요~",
            visible: openModifyModal,
          }}
        />
      )}
    </>
  );
};

export default ActiveItem;
