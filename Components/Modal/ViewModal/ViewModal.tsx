import React from "react";
import * as s from "./Style";
import TextInput from "../../Input/TextInput/TextInput";
import ModalButton from "../../Button/ModalButton/ModalButton";

const WriteModal = () => {
  return (
    <s.ModalWrapper>
      <s.Title>점축 땡길 사람?</s.Title>
      <s.People>20명</s.People>
      <s.TextViewer>
        <s.Text>
          오늘 날씨가 정말 좋은데 이건 축구를 안 땡기면 범죄다 ㄹㅇ
        </s.Text>
      </s.TextViewer>
      <s.ButtonWrapper>
        <ModalButton text="땡겨!!" className="check" />
      </s.ButtonWrapper>
    </s.ModalWrapper>
  );
};

export default WriteModal;
