"use client";

import { useMemo, type Ref } from "react";

export default function BalancinhoSvg({
  alpinistaRef,
}: {
  alpinistaRef: Ref<SVGGElement>;
}) {
  const janelas = useMemo(() => {
    const rects = [];
    for (let l = 0; l < 16; l++) {
      for (let c = 0; c < 2; c++) {
        rects.push(
          <rect
            key={`${l}-${c}`}
            x={138 + c * 38}
            y={24 + l * 50}
            width={24}
            height={30}
            rx={2}
          />
        );
      }
    }
    return rects;
  }, []);

  return (
    <svg
      className="anim-predio-svg"
      viewBox="0 0 230 800"
      preserveAspectRatio="xMidYMin slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="anim-vest" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ff8a3d" />
          <stop offset="1" stopColor="#e96a14" />
        </linearGradient>
        <linearGradient id="anim-calca" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4a4b4f" />
          <stop offset="1" stopColor="#333437" />
        </linearGradient>
      </defs>
      <rect x="120" y="0" width="110" height="800" fill="#4a4b4a" />
      <rect x="120" y="0" width="14" height="800" fill="#3f403f" />
      <g fill="#5d5e5d">{janelas}</g>
      <line x1="156" y1="0" x2="156" y2="800" stroke="#2e2f2e" strokeWidth="2" />
      <line x1="200" y1="0" x2="200" y2="800" stroke="#2e2f2e" strokeWidth="2" />
      <g ref={alpinistaRef} className="anim-alpinista" id="anim-alpinista">
        <g transform="translate(-30,0)">
          <line x1="58" y1="-700" x2="58" y2="96" stroke="#d8d5d0" strokeWidth="3" />
          <line x1="128" y1="-700" x2="128" y2="96" stroke="#d8d5d0" strokeWidth="3" />
          <g id="anim-pessoa">
            <path d="M86 62 L80 78 L84 90" fill="none" stroke="#2c2d30" strokeWidth="9" strokeLinecap="round" />
            <path d="M80 90 h12 v6 h-16 q-3 -3 0 -6 z" fill="#1f2022" />
            <path d="M86 34 Q70 40 60 52" fill="none" stroke="#c95c10" strokeWidth="8" strokeLinecap="round" />
            <circle cx="59" cy="54" r="5" fill="#e8b48c" />
            <path d="M84 28 Q98 30 96 46 L90 62 Q82 66 78 60 L80 40 Q80 30 84 28 z" fill="url(#anim-vest)" />
            <path d="M82 44 L95 47" stroke="#f4e94c" strokeWidth="4" strokeLinecap="round" />
            <path d="M86 30 L90 60" stroke="#f4e94c" strokeWidth="3" strokeLinecap="round" opacity=".85" />
            <path d="M80 60 h14" stroke="#222" strokeWidth="5" strokeLinecap="round" />
            <path d="M88 60 Q104 50 126 44" fill="none" stroke="#C89127" strokeWidth="2.5" strokeDasharray="4 3" />
            <path d="M92 62 L100 76 L98 90" fill="none" stroke="url(#anim-calca)" strokeWidth="10" strokeLinecap="round" />
            <path d="M94 90 h14 v6 h-18 q-3 -3 0 -6 z" fill="#26272a" />
            <path d="M94 34 Q112 34 124 40" fill="none" stroke="#ff8a3d" strokeWidth="8" strokeLinecap="round" />
            <circle cx="126" cy="41" r="5.5" fill="#e8b48c" />
            <g>
              <rect x="130" y="39" width="17" height="3.6" rx="1.8" fill="#7a5a2a" />
              <rect x="145" y="35.5" width="6.5" height="10.5" rx="2" fill="#3a3b3d" />
              <path d="M154 37 l5 -3 M155 41 l6 0 M154 45 l5 3" stroke="#C89127" strokeWidth="2" strokeLinecap="round" />
            </g>
            <g>
              <circle cx="94" cy="18" r="9.5" fill="#e8b48c" />
              <path d="M102 17 q4 1 3 4 l-4 0 z" fill="#e8b48c" />
              <circle cx="99" cy="16" r="1.4" fill="#222" />
              <circle cx="90" cy="19" r="1.3" fill="#d99b6c" />
              <path d="M84 14 a10.5 10.5 0 0 1 21 0 l0 2 -21 0 z" fill="#C89127" />
              <rect x="98" y="13.4" width="11" height="3.4" rx="1.7" fill="#a87b1f" />
              <path d="M86 8 q8 -5 16 0" stroke="rgba(255,255,255,.55)" strokeWidth="2" fill="none" />
            </g>
          </g>
          <g>
            <rect x="48" y="96" width="92" height="9" rx="3" fill="#C89127" />
            <rect x="52" y="105" width="84" height="4" rx="2" fill="#a87b1f" />
            <path d="M58 96 v-8 m70 8 v-8" stroke="#8a8b8d" strokeWidth="3" />
            <rect x="54" y="84" width="9" height="6" rx="2" fill="#6f7072" />
            <rect x="124" y="84" width="9" height="6" rx="2" fill="#6f7072" />
          </g>
        </g>
      </g>
    </svg>
  );
}
