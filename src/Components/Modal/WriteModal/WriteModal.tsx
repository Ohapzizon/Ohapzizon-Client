import React from "react";
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

const WriteModal = () => {
  return (
    <s.ModalWrapper>
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
        <ModalButton text="취소" className="cancel" />
        <ModalButton text="땡겨!!" className="check" />
      </s.ButtonWrapper>
    </s.ModalWrapper>
  );
};

export default WriteModal;
