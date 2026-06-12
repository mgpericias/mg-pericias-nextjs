import { forwardRef } from "react";

const DroneSvg = forwardRef<SVGGElement>(function DroneSvg(_, ref) {
  return (
    <svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g ref={ref} id="anim-drone-corpo">
        <defs>
          <linearGradient id="anim-corpo" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#fdfdfc" />
            <stop offset=".55" stopColor="#e8e6e2" />
            <stop offset="1" stopColor="#c9c6c1" />
          </linearGradient>
          <linearGradient id="anim-corpoTopo" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="1" stopColor="#e2dfda" />
          </linearGradient>
          <linearGradient id="anim-braco" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f4f2ef" />
            <stop offset="1" stopColor="#c2bfba" />
          </linearGradient>
          <radialGradient id="anim-lente" cx=".4" cy=".35" r=".9">
            <stop offset="0" stopColor="#9fd4ff" />
            <stop offset=".5" stopColor="#2b6fb3" />
            <stop offset="1" stopColor="#0b2a4a" />
          </radialGradient>
          <linearGradient id="anim-gimbal" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#55565a" />
            <stop offset="1" stopColor="#2b2c2f" />
          </linearGradient>
        </defs>
        <ellipse cx="130" cy="186" rx="62" ry="9" fill="rgba(0,0,0,.18)" />
        <g>
          <path d="M98 78 L52 56 q-6 -2 -4 -7 l1 -2 q2 -4 8 -3 l50 20 z" fill="url(#anim-braco)" stroke="#b3b0aa" strokeWidth="1" />
          <path d="M162 78 L208 56 q6 -2 4 -7 l-1 -2 q-2 -4 -8 -3 l-50 20 z" fill="url(#anim-braco)" stroke="#b3b0aa" strokeWidth="1" />
          <g><rect x="40" y="44" width="18" height="12" rx="5" fill="#3a3b3d" /><rect x="42" y="42" width="14" height="4" rx="2" fill="#55565a" /></g>
          <g><rect x="202" y="44" width="18" height="12" rx="5" fill="#3a3b3d" /><rect x="204" y="42" width="14" height="4" rx="2" fill="#55565a" /></g>
          <g className="anim-helice" style={{ transformBox: "fill-box" as const }}><ellipse cx="49" cy="44" rx="34" ry="4.5" fill="rgba(40,40,42,.30)" /><ellipse cx="49" cy="44" rx="34" ry="4.5" fill="rgba(255,255,255,.12)" transform="rotate(18 49 42)" /></g>
          <g className="anim-helice" style={{ transformBox: "fill-box" as const }}><ellipse cx="211" cy="44" rx="34" ry="4.5" fill="rgba(40,40,42,.30)" /><ellipse cx="211" cy="44" rx="34" ry="4.5" fill="rgba(255,255,255,.12)" transform="rotate(-18 211 42)" /></g>
          <circle cx="49" cy="53" r="2.4" fill="#ff4d4d" />
          <circle cx="211" cy="53" r="2.4" fill="#ff4d4d" />
        </g>
        <g>
          <path d="M86 96 q-10 -2 -10 -12 q0 -8 10 -12 q20 -8 44 -8 q24 0 44 8 q10 4 10 12 q0 10 -10 12 q-20 8 -44 8 q-24 0 -44 -8 z" fill="url(#anim-corpo)" stroke="#b8b5af" strokeWidth="1.2" />
          <path d="M92 74 q14 -12 38 -12 q24 0 38 12 q8 6 4 12 l-4 4 q-16 -10 -38 -10 q-22 0 -38 10 l-4 -4 q-4 -6 4 -12 z" fill="url(#anim-corpoTopo)" stroke="#c6c3bd" strokeWidth="1" />
          <path d="M84 88 q46 14 92 0" fill="none" stroke="#C89127" strokeWidth="3" strokeLinecap="round" />
          <circle cx="108" cy="92" r="4.5" fill="#222326" />
          <circle cx="152" cy="92" r="4.5" fill="#222326" />
          <circle cx="106.7" cy="90.7" r="1.4" fill="#8a8d92" />
          <circle cx="150.7" cy="90.7" r="1.4" fill="#8a8d92" />
        </g>
        <g>
          <path d="M98 96 L40 116 q-8 3 -6 9 l1 2 q3 5 10 3 l60 -20 z" fill="url(#anim-braco)" stroke="#aaa7a1" strokeWidth="1.2" />
          <path d="M162 96 L220 116 q8 3 6 9 l-1 2 q-3 5 -10 3 l-60 -20 z" fill="url(#anim-braco)" stroke="#aaa7a1" strokeWidth="1.2" />
          <g><rect x="26" y="106" width="24" height="15" rx="6" fill="#3a3b3d" /><rect x="29" y="103" width="18" height="5" rx="2.5" fill="#55565a" /><rect x="31" y="121" width="14" height="4" rx="2" fill="#2c2d2f" /></g>
          <g><rect x="210" y="106" width="24" height="15" rx="6" fill="#3a3b3d" /><rect x="213" y="103" width="18" height="5" rx="2.5" fill="#55565a" /><rect x="215" y="121" width="14" height="4" rx="2" fill="#2c2d2f" /></g>
          <g className="anim-helice" style={{ transformBox: "fill-box" as const }}><ellipse cx="38" cy="104" rx="44" ry="6" fill="rgba(40,40,42,.32)" /><ellipse cx="38" cy="104" rx="44" ry="6" fill="rgba(255,255,255,.14)" transform="rotate(15 38 104)" /></g>
          <g className="anim-helice" style={{ transformBox: "fill-box" as const }}><ellipse cx="222" cy="104" rx="44" ry="6" fill="rgba(40,40,42,.32)" /><ellipse cx="222" cy="104" rx="44" ry="6" fill="rgba(255,255,255,.14)" transform="rotate(-15 222 104)" /></g>
          <circle cx="38" cy="117" r="2.6" fill="#46e06b" />
          <circle cx="222" cy="117" r="2.6" fill="#46e06b" />
        </g>
        <g stroke="#c6c3bd" strokeWidth="5" strokeLinecap="round" fill="none">
          <path d="M104 102 L96 150" />
          <path d="M156 102 L164 150" />
        </g>
        <g stroke="#b3b0aa" strokeWidth="6" strokeLinecap="round">
          <line x1="84" y1="152" x2="110" y2="152" />
          <line x1="150" y1="152" x2="176" y2="152" />
        </g>
        <g>
          <rect x="122" y="104" width="16" height="10" rx="3" fill="#46474b" />
          <rect x="118" y="112" width="24" height="20" rx="6" fill="url(#anim-gimbal)" />
          <rect x="115" y="116" width="6" height="12" rx="3" fill="#36373a" />
          <circle cx="130" cy="124" r="9" fill="#1c1d1f" stroke="#C89127" strokeWidth="2" />
          <circle cx="130" cy="124" r="5.6" fill="url(#anim-lente)" />
          <circle cx="128" cy="121.6" r="1.6" fill="rgba(255,255,255,.85)" />
        </g>
        <path d="M96 70 q16 -10 34 -11" stroke="rgba(255,255,255,.8)" strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
});

export default DroneSvg;
