import React, { useEffect } from "react";
import { useRouter } from "next/router";
import member from "../Api/member";

const callback = () => {
  const router = useRouter();
  const { code } = router.query;
  const getCode = async () => {
    try {
      await member.callback(code);
    } catch (e: any) {
      alert(e);
    }
  };

  useEffect(() => {
    getCode().then(async (res) => {
      localStorage.setItem("access_token", res.data.accessToken);
      localStorage.setItem("refresh_token", res.refreshToken);
    });
  }, []);

  return <div></div>;
};

export default callback;
