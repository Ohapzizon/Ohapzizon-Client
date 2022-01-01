import * as React from "react";

function Moon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="50px" height="50px" viewBox="0 0 70 70" fill="none" {...props}>
      <path
        d="M67.061 40.357C64.508 55.757 51.123 67.5 35 67.5 17.05 67.5 2.5 52.95 2.5 35c0-15.893 11.41-29.126 26.486-31.945a.424.424 0 01.058-.008c.012.013.03.036.051.075.106.196.134.53-.054.837-7.495 12.249-7.848 26.8-1.05 35.75 3.45 4.543 8.65 7.47 15.275 7.808 6.553.333 14.335-1.868 23.153-7.185.252-.152.49-.115.612-.046a.253.253 0 01.035.023.404.404 0 01-.005.048zM29.064 3.048h-.005.005zm38.002 37.239v0z"
        stroke="#955CFF"
        strokeWidth={5}
      />
    </svg>
  );
}

const MemoMoon = React.memo(Moon);
export default MemoMoon;
