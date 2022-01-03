import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { isModify, isModifyModalOpen, isOpen } from "../../../atoms/index";
import Input from "../../Input/Modal/Input";
import * as s from "./Style";
import TextInput from "../../Input/TextInput/TextInput";
import ModalButton from "../../Button/ModalButton/ModalButton";

const people = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

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

const ModifyModal: React.FC<ModalProps> = ({ modalObj }) => {
  const [modifyModalIsClose, setModifyModalClose] =
    useRecoilState(isModifyModalOpen);
  const [updateTitle, setUpdateTitle] = useState<string>(modalObj.title);
  const [updateContent, setUpdateContent] = useState<string>(modalObj.content);
  const [updatePeople, setUpdatePeople] = useState<number>(modalObj.people);

  console.log(updateTitle);
  console.log(updateContent);
  console.log(updatePeople);

  return (
    <>
      {!modifyModalIsClose ? null : (
        <>
          <s.ModalOverlay
            visible={modalObj.visible}
            onClick={() => setModifyModalClose(false)}
          />
          <s.ModalWrapper visible={modalObj.visible}>
            <Input
              type="text"
              value={updateTitle}
              onChange={(e) => setUpdateTitle(e.target.value)}
            />
            <s.Dropdown>
              <p>인원수</p>
              <s.DropdownSelect
                onChange={(e) => setUpdatePeople(parseInt(e.target.value))}
              >
                {people.map((people, idx) => (
                  <s.DropdownOption
                    key={idx}
                    selected={people === modalObj.people}
                  >
                    {people}명
                  </s.DropdownOption>
                ))}
              </s.DropdownSelect>
            </s.Dropdown>
            <TextInput
              value={updateContent}
              onChange={(e) => setUpdateContent(e.target.value)}
            />
            <s.ButtonWrapper>
              <ModalButton
                text="취소"
                btnType={"cancel"}
                onClick={() => setModifyModalClose(false)}
              />
              <ModalButton
                text="수정하기"
                btnType={"modify"}
                onClick={() => setModifyModalClose(false)}
              />
            </s.ButtonWrapper>
          </s.ModalWrapper>
        </>
      )}
    </>
  );
};

export default ModifyModal;
