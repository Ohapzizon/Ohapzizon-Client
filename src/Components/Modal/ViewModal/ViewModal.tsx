import React from "react";
import { isOpen } from "../../../atoms";
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
  const [modalIsClose, setModalIsClose] = useRecoilState(isOpen);

  function onClose() {
    setModalIsClose(false);
  }

  return (
    <>
      {!modalIsClose ? null : (
        <>
          <s.ModalOverlay visible={modalObj.visible} onClick={onClose} />
          <s.ModalWrapper visible={modalObj.visible}>
            <s.Title>{modalObj.title}</s.Title>
            <s.People>{modalObj.people} 명</s.People>
            <s.TextViewer>
              <s.Text>{modalObj.content}</s.Text>
            </s.TextViewer>
            <ModalButton text="땡겨!!" btnType={"pull"} onClick={onClose} />
          </s.ModalWrapper>
        </>
      )}
    </>
  );
};

export default ViewModal;
