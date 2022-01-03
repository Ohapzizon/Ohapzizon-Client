import React from "react";
import { useRecoilState } from "recoil";
import { isModify, isModifyModalOpen } from "../../../atoms";
import ModifyModal from "../../Modal/ModifyModal/Modifymodal";
import * as s from "./Style";

const ActiveButton = ({ onClick }) => {
  return (
    <s.Positioner>
      <s.ModifyButton onClick={onClick}>수정</s.ModifyButton>
      <s.DeleteButton>삭제</s.DeleteButton>
    </s.Positioner>
  );
};

export default ActiveButton;
