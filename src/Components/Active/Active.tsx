import React, { useEffect, useState } from "react";
import ActiveItem from "../ActiveItem/ActiveItem";
import * as s from "./Style";
import Post from "../../Api/post";

const onActiveList = async () => {
  try {
    return await Post.recruitmentAllRef();
  } catch (e) {}
};

const Active = () => {
  const [activeList, setActiveList] = useState();

  useEffect(() => {
    onActiveList().then((res) => setActiveList(res.data.data));
    console.log(activeList);
  }, []);

  return (
    <s.Positioner>
      {activeList &&
        [...activeList].map((item, idx) => (
          <ActiveItem activeObj={item} key={idx} />
        ))}
    </s.Positioner>
  );
};

export default Active;
