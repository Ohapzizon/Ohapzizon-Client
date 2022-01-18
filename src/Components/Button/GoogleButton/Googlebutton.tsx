import React, { useEffect, useState } from "react";
import member from "../../../Api/member";
import * as i from "../../../Assets/index";
import * as s from "./Style";

type ButtonProps = {
  onClick?: (e: any) => void;
};

const Googlebutton: React.FC<ButtonProps> = ({ onClick }) => {
  const [googleLink, setGoogleLink] = useState<string>();

  const onGoogleURL = async () => {
    try {
      const res = await member.googleAuth();
      setGoogleLink(res.data);
    } catch (e) {}
  };

  useEffect(() => {
    onGoogleURL();
  }, []);
  return (
    <>
      <s.Button href={googleLink}>
        <i.Google />
      </s.Button>
      <s.Text>Google 로그인</s.Text>
    </>
  );
};

export default Googlebutton;
