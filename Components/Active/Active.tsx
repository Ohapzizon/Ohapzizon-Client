import React from "react";
import ActiveItem from "../ActiveItem/ActiveItem";
import * as s from "./Style";

const activedata = [
  {
    id: 1,
    title: "축구 할 사람",
    people: 18,
    content:
      "저기 운동장에서 축구 한판 땡길분들 밥 얼른 먹고 축구화나 챙겨서 나오세요~",
  },
  {
    id: 2,
    title: "농구 할 사람",
    people: 10,
    content:
      "저기 강당에서 농구 한판 땡길분들 밥 얼른 먹고 농구화 챙겨서 나오세요~",
  },
  {
    id: 3,
    title: "피트니스 할 사람",
    people: 5,
    content:
      "저기 피트니스실에서 근육펌핑 하실 분 밥 얼른 먹고 프로틴 챙겨서 나오세요~",
  },
  {
    id: 4,
    title: "개발 할 사람",
    people: 4,
    content:
      "저기 온라인스터디카페에서 개발 하실 분 밥 얼른 먹고 노트북 챙겨서 나오세요~",
  },
  {
    id: 5,
    title: "호떡 먹으러 갈 사람",
    people: 3,
    content: "오늘 호떡 너무 땡깁니다 물론 붕어빵도 괜찮고요 땡기로 가시죠~",
  },
  {
    id: 6,
    title: "캐치볼 할 사람",
    people: 2,
    content:
      "저기 운동장에서 축구 하지만 옆에 낑겨서 캐치볼 할 사람들 나오시죠 참고로 전 광주의 양현종 ㅋ",
  },
  {
    id: 7,
    title: "맨몸운동 할 사람",
    people: 2,
    content: "상남자 답게 2명이서 턱걸이 조지시죠~",
  },
];

const Active = () => {
  return (
    <s.Positioner>
      {activedata.map((item, idx) => (
        <ActiveItem activeObj={item} key={idx} />
      ))}
    </s.Positioner>
  );
};

export default Active;
