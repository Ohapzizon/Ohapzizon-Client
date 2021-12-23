import * as React from "react";

function Dropdown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 13 9" fill="none" {...props}>
      <path
        d="M6.971 8.401a.6.6 0 01-.942 0l-5.26-6.68A.6.6 0 011.241.75h10.518a.6.6 0 01.472.971l-5.26 6.68z"
        fill="#fff"
      />
    </svg>
  );
}

const MemoDropdown = React.memo(Dropdown);
export default MemoDropdown;
