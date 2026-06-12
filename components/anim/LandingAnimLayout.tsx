"use client";

import "@/app/anim-lp.css";
import BalancinhoScroll from "@/components/anim/BalancinhoScroll";
import DroneScroll from "@/components/anim/DroneScroll";
import LupaScroll from "@/components/anim/LupaScroll";

export type AnimacaoLp = "drone" | "balancinho" | "lupa";

type Props = {
  animacao?: AnimacaoLp;
  children: React.ReactNode;
};

export default function LandingAnimLayout({ animacao, children }: Props) {
  return (
    <div
      className={`anim-lp-root${animacao === "balancinho" ? " anim-lp-balancinho" : ""}`}
    >
      {animacao === "drone" && <DroneScroll />}
      {animacao === "balancinho" && <BalancinhoScroll />}
      {animacao === "lupa" && <LupaScroll />}
      <div className="anim-lp-main">{children}</div>
    </div>
  );
}
