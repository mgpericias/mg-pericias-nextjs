"use client";

import { useEffect, useRef } from "react";
import DroneSvg from "@/components/anim/DroneSvg";
import { progressoEntre, querySecao } from "@/components/anim/scroll-math";
import { useAnimEnabled } from "@/components/anim/useAnimEnabled";

export default function DroneScroll() {
  const enabled = useAnimEnabled();
  const wrapRef = useRef<HTMLDivElement>(null);
  const corpoRef = useRef<SVGGElement>(null);
  const velRef = useRef(0);
  const lastYRef = useRef(0);
  const tRef = useRef(0);

  useEffect(() => {
    if (!enabled) return;

    lastYRef.current = window.scrollY;
    let frame = 0;

    const tick = () => {
      tRef.current += 0.016;
      const dy = window.scrollY - lastYRef.current;
      lastYRef.current = window.scrollY;
      velRef.current += (dy - velRef.current) * 0.1;

      const hero = querySecao(".lp-hero-v2");
      const faq = querySecao(".lp-faq");
      const form = querySecao("#contato");
      const wrap = wrapRef.current;
      const corpo = corpoRef.current;

      if (hero && faq && form && wrap && corpo) {
        const heroRect = hero.getBoundingClientRect();
        const formRect = form.getBoundingClientRect();
        const visivel =
          heroRect.bottom < window.innerHeight * 0.95 &&
          formRect.top > window.innerHeight * 0.12;

        wrap.classList.toggle("anim-visible", visivel);

        if (visivel) {
          const p = progressoEntre(hero, faq);
          const y = 8 + p * 70;
          const flutua = Math.sin(tRef.current * 2.2) * 6;
          const inclina = Math.max(-14, Math.min(14, velRef.current * 0.6));
          wrap.style.transform = `translateY(calc(${y}vh + ${flutua}px))`;
          corpo.setAttribute("transform", `rotate(${inclina} 130 100)`);
        }
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div ref={wrapRef} className="anim-drone-wrap" aria-hidden="true">
      <DroneSvg ref={corpoRef} />
    </div>
  );
}
