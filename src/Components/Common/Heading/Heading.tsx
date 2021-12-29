import React from "react";
import * as s from "./Style";
import * as i from "../../../Assets";

const checkTime = () => {
  const hours = new Date().getHours();
  return hours > 0 && hours < 13 ? "점심" : "저녁";
};

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
  return (
    <s.Positioner>
      <s.HeadingTitle>{checkTime()} 먹고 뭐하지</s.HeadingTitle>
      <s.HeadingText>
        오늘은 <b>{randomActivity()}</b> 땡기는거 어때요?
      </s.HeadingText>
      <s.RecruitBtn>
        <i.Recruit />
        모집하기
      </s.RecruitBtn>
    </s.Positioner>
  );
};

export default Heading;