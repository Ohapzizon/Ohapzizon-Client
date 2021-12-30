import React from "react";
import { useRecoilState } from "recoil";
import { isWriteModalOpen } from "../../../atoms/index";
import * as s from "./Style";
import * as i from "../../../Assets";
import { CheckTime } from "../../../Util/CheckTime";
import { theme } from "../../../atoms";
import { useRecoilValue } from "recoil";
import WriteModal from "../../Modal/WriteModal/WriteModal";

const randomActivity = () => {
  const Activity: string[] = [
    "축구",
    "농구",
    "배구",
    "배드민턴",
    "피트니스",
    "맨몸운동",
    "캐치볼",
  ];

  return Activity[Math.floor(Math.random() * 7)];
};

const Heading = () => {
  const themeMode = useRecoilValue(theme);
  const [writeModalIsOpen, setWriteModalIsOpen] =
    useRecoilState(isWriteModalOpen);

  function openWriteModal() {
    setWriteModalIsOpen(true);
  }
  return (
    <>
      <s.Positioner mode={themeMode}>
        <s.HeadingTitle>
          {CheckTime() === "light" ? "점심" : "저녁"} 먹고 뭐하지
        </s.HeadingTitle>
        <s.HeadingText>
          오늘은 <b>{randomActivity()}</b> 땡기는거 어때요?
        </s.HeadingText>
        <s.RecruitBtn>
          <i.Recruit />
          모집하기
        </s.RecruitBtn>
      </s.Positioner>
      {writeModalIsOpen && (
        <WriteModal
          modalObj={{
            visible: writeModalIsOpen,
          }}
        />
      )}
    </>
  );
};

export default Heading;
