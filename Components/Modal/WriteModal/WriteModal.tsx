import React from "react";
import Input from "../../Input/Modal/Input";
import * as s from "./Style";
import * as i from "../../../Assets/index";
import TextInput from "../../Input/TextInput/TextInput";
import ModalButton from "../../Button/ModalButton/ModalButton";

const WriteModal = () => {
  return (
    <s.ModalWrapper>
      <Input type="text" />
      <s.Dropdown>
        <p>인원수</p>
        <s.DropdownSelect>
          <span>선택</span>
          <i.Dropdown className="Image" />
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
