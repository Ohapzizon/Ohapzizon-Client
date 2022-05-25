import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { isModifyModalOpen, isOpen } from "../../atoms";
import ViewModal from "../Modal/ViewModal/ViewModal";
import * as s from "./Style";
import PullButton from "../Button/PullButton/PullButton";
import ActiveButton from "../Button/ActiveButton/ActiveButton";
import ModifyModal from "../Modal/ModifyModal/Modifymodal";

type activeItem = {
  post_idx: number;
  title: string;
  isDayOrNight: string;
  maxCount: number;
  contents: string;
  user: { name: string };
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
            <span>{activeObj.isDayOrNight === "DAY" ? "☀️" : "🌙"}</span>
          </s.TitleContainer>
          <s.InfoContainer>
            <s.Personnel>👥 {activeObj.maxCount}명</s.Personnel>
            <span>{activeObj.user.name}</span>
          </s.InfoContainer>
          <s.content>{activeObj.contents}</s.content>
        </s.ContentContainer>
        <PullButton />
      </s.Positioner>
      {modalIsOpen && (
        <ViewModal
          modalObj={{
            id: activeObj.post_idx,
            title: activeObj.title,
            people: activeObj.maxCount,
            content: activeObj.contents,
            visible: modalIsOpen,
          }}
        />
      )}
      {openModifyModal && (
        <ModifyModal
          modalObj={{
            id: activeObj.post_idx,
            title: activeObj.title,
            people: activeObj.maxCount,
            content: activeObj.contents,
            visible: openModifyModal,
          }}
        />
      )}
    </>
  );
};

export default ActiveItem;
