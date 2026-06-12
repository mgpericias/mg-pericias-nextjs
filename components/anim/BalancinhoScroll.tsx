"use client";

import { useEffect, useRef } from "react";
import BalancinhoSvg from "@/components/anim/BalancinhoSvg";
import { progressoEntre, querySecao } from "@/components/anim/scroll-math";
import { useAnimEnabled } from "@/components/anim/useAnimEnabled";

export default function BalancinhoScroll() {
  const enabled = useAnimEnabled();
  const lateralRef = useRef<HTMLDivElement>(null);
  const alpinistaRef = useRef<SVGGElement>(null);
  const oscRef = useRef(0);
  const oscVRef = useRef(0);
  const velRef = useRef(0);
  const lastYRef = useRef(0);

  useEffect(() => {
    if (!enabled) return;

    lastYRef.current = window.scrollY;
    let frame = 0;

    const tick = () => {
      const dy = window.scrollY - lastYRef.current;
      lastYRef.current = window.scrollY;
      velRef.current = dy;

      const inicio = querySecao(".lp-para-quem");
      const fim = querySecao("#avaliacoes");
      const lateral = lateralRef.current;
      const alpinista = alpinistaRef.current;

      if (inicio && fim && lateral && alpinista) {
        const inicioRect = inicio.getBoundingClientRect();
        const fimRect = fim.getBoundingClientRect();
        const visivel =
          inicioRect.top < window.innerHeight * 0.9 && fimRect.top > 0;

        lateral.classList.toggle("anim-visible", visivel);

        if (visivel) {
          const p = progressoEntre(inicio, fim);
          oscVRef.current += -oscRef.current * 0.04;
          oscVRef.current += velRef.current * 0.015;
          oscVRef.current *= 0.92;
          oscRef.current += oscVRef.current;
          const y = 40 + p * 600;
          alpinista.setAttribute(
            "transform",
            `translate(${oscRef.current}, ${y}) rotate(${oscRef.current * 0.5} 64 60)`
          );
        }
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div ref={lateralRef} className="anim-balancinho-lateral" aria-hidden="true">
      <BalancinhoSvg alpinistaRef={alpinistaRef} />
    </div>
  );
}
