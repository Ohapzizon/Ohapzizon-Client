import React from "react";
import { isOpen } from "../../../atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { theme } from "../../../atoms";
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
  const themeMode = useRecoilValue(theme);
  const [modalIsClose, setModalIsClose] = useRecoilState(isOpen);

  function onClose() {
    setModalIsClose(false);
  }

  return (
    <>
      {!modalIsClose ? null : (
        <>
          <s.ModalOverlay
            visible={modalObj.visible}
            onClick={onClose}
            mode={themeMode}
          />
          <s.ModalWrapper visible={modalObj.visible} mode={themeMode}>
            <s.Title>{modalObj.title}</s.Title>
            <s.People>{modalObj.people} 명</s.People>
            <s.TextViewer>
              <s.Text>{modalObj.content}</s.Text>
            </s.TextViewer>
            <s.ButtonWrapper>
              <ModalButton text="땡겨!!" btnType={"pull"} onClick={onClose} />
            </s.ButtonWrapper>
          </s.ModalWrapper>
        </>
      )}
    </>
  );
};

export default ViewModal;
