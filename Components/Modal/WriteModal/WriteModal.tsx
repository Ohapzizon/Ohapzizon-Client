import React from "react";
import Input from "../../Input/Modal/Input";
import * as s from "./Style";
import * as i from "../../../Assets/index";

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
    </s.ModalWrapper>
  );
};

export default WriteModal;
