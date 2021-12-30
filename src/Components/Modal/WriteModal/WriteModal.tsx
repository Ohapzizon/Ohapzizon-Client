import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { isWriteModalOpen } from "../../../atoms/index";
import { theme } from "../../../atoms";
import Input from "../../Input/Modal/Input";
import * as s from "./Style";
import TextInput from "../../Input/TextInput/TextInput";
import ModalButton from "../../Button/ModalButton/ModalButton";

const people = [
  "선택",
  "1명",
  "2명",
  "3명",
  "4명",
  "5명",
  "6명",
  "7명",
  "8명",
  "10명",
  "11명",
  "12명",
  "13명",
  "14명",
  "15명",
  "16명",
  "17명",
  "18명",
  "19명",
  "20명",
];

type modal = {
  visible: boolean;
};

interface ModalProps {
  modalObj: modal;
}

const WriteModal: React.FC<ModalProps> = ({ modalObj }) => {
  const themeMode = useRecoilValue(theme);
  const [writemodalIsClose, setWriteModalIsClose] =
    useRecoilState(isWriteModalOpen);

  function onClose() {
    setWriteModalIsClose(false);
  }

  return (
    <>
      {!writemodalIsClose ? null : (
        <>
          <s.ModalOverlay
            visible={modalObj.visible}
            onClick={onClose}
            mode={themeMode}
          />
          <s.ModalWrapper visible={modalObj.visible} mode={themeMode}>
            <Input type="text" />
            <s.Dropdown>
              <p>인원수</p>
              <s.DropdownSelect>
                {people.map((people, idx) => (
                  <s.DropdownOption key={idx}>{people}</s.DropdownOption>
                ))}
              </s.DropdownSelect>
            </s.Dropdown>
            <TextInput />
            <s.ButtonWrapper>
              <ModalButton text="취소" btnType={"cancel"} onClick={onClose} />
              <ModalButton text="땡겨!!" btnType={"pull"} onClick={onClose} />
            </s.ButtonWrapper>
          </s.ModalWrapper>
        </>
      )}
    </>
  );
};

export default WriteModal;
