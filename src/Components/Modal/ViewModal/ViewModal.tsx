import React from "react";
import * as s from "./Style";
import ModalButton from "../../Button/ModalButton/ModalButton";

type modal = {
  id: number;
  title: string;
  people: number;
  content: string;
};

interface ModalProps {
  modalObj: modal;
}

const ViewModal: React.FC<ModalProps> = ({ modalObj }) => {
  return (
    <s.ModalWrapper>
      <s.Title>{modalObj.title}</s.Title>
      <s.People>{modalObj.people} 명</s.People>
      <s.TextViewer>
        <s.Text>{modalObj.content}</s.Text>
      </s.TextViewer>
      <s.ButtonWrapper>
        <ModalButton text="땡겨!!" className="check" />
      </s.ButtonWrapper>
    </s.ModalWrapper>
  );
};

export default ViewModal;
