import * as React from "react";

function Sun(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="50px" height="50px" viewBox="0 0 70 68" fill="none" {...props}>
      <rect y={31} width={12} height={5} rx={2.5} fill="#E9C300" />
      <rect
        x={11.536}
        y={9}
        width={12}
        height={5}
        rx={2.5}
        transform="rotate(45 11.536 9)"
        fill="#E9C300"
      />
      <rect
        x={33}
        y={12}
        width={12}
        height={5}
        rx={2.5}
        transform="rotate(-90 33 12)"
        fill="#E9C300"
      />
      <rect
        x={52}
        y={17.485}
        width={12}
        height={5}
        rx={2.5}
        transform="rotate(-45 52 17.485)"
        fill="#E9C300"
      />
      <rect x={58} y={31} width={12} height={5} rx={2.5} fill="#E9C300" />
      <rect
        x={55.536}
        y={47}
        width={12}
        height={5}
        rx={2.5}
        transform="rotate(45 55.536 47)"
        fill="#E9C300"
      />
      <rect
        x={38}
        y={56}
        width={12}
        height={5}
        rx={2.5}
        transform="rotate(90 38 56)"
        fill="#E9C300"
      />
      <rect
        x={6}
        y={55.485}
        width={12}
        height={5}
        rx={2.5}
        transform="rotate(-45 6 55.485)"
        fill="#E9C300"
      />
      <circle cx={35} cy={34} r={14.5} stroke="#E9C300" strokeWidth={5} />
    </svg>
  );
}

const MemoSun = React.memo(Sun);
export default MemoSun;
