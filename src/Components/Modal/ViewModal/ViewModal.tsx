import React from "react";
import { isOpened } from "../../../atoms";
import { useRecoilState } from "recoil";
import * as s from "./Style";
import ModalButton from "../../Button/ModalButton/ModalButton";

type modal = {
  id: number;
  title: string;
  people: number;
  content: string;
  visible: boolean;
};

interface ModalProps {
  modalObj: modal;
}

const ViewModal: React.FC<ModalProps> = ({ modalObj }) => {
  const [closeModal, setCloseModal] = useRecoilState(isOpened);

  function onClosed() {
    setCloseModal(false);
  }

  return (
    <>
      {!closeModal ? null : (
        <>
          <s.ModalOverlay visible={modalObj.visible} onClick={onClosed} />
          <s.ModalWrapper visible={modalObj.visible}>
            <s.Title>{modalObj.title}</s.Title>
            <s.People>{modalObj.people} 명</s.People>
            <s.TextViewer>
              <s.Text>{modalObj.content}</s.Text>
            </s.TextViewer>
            <ModalButton text="땡겨!!" className="check" />
          </s.ModalWrapper>
        </>
      )}
    </>
  );
};

export default ViewModal;
