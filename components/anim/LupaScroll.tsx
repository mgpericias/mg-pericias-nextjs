"use client";

import { useEffect, useRef } from "react";
import LupaScrollSvg from "@/components/anim/LupaScrollSvg";
import { progressoEntre, querySecao } from "@/components/anim/scroll-math";
import { useAnimEnabled } from "@/components/anim/useAnimEnabled";

export default function LupaScroll() {
  const enabled = useAnimEnabled();
  const lupaRef = useRef<HTMLDivElement>(null);
  const tRef = useRef(0);

  useEffect(() => {
    if (!enabled) return;

    let frame = 0;

    const tick = () => {
      tRef.current += 0.016;

      const hero = querySecao(".lp-hero-v2");
      const faq = querySecao(".lp-faq");
      const form = querySecao("#contato");
      const lupa = lupaRef.current;

      if (hero && faq && form && lupa) {
        const heroRect = hero.getBoundingClientRect();
        const formRect = form.getBoundingClientRect();
        const visivel =
          heroRect.bottom < window.innerHeight * 0.95 &&
          formRect.top > window.innerHeight * 0.12;

        lupa.classList.toggle("anim-visible", visivel);

        if (visivel) {
          const p = progressoEntre(hero, faq);
          const y = 12 + p * 64;
          const gira = Math.sin(tRef.current * 1.4) * 8 + p * 20;
          lupa.style.transform = `translateY(${y}vh) rotate(${gira}deg)`;
        }
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div ref={lupaRef} className="anim-lupa-scroll" aria-hidden="true">
      <LupaScrollSvg />
    </div>
  );
}
