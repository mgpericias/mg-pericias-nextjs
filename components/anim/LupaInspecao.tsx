"use client";

import { useCallback, useRef } from "react";

export type MarcadorLupa = {
  rotulo: string;
  left: string;
  top: string;
};

type Props = {
  imagem: string;
  marcadores: MarcadorLupa[];
};

const ZOOM = 2.2;

export default function LupaInspecao({ imagem, marcadores }: Props) {
  const boxRef = useRef<HTMLDivElement>(null);
  const lenteRef = useRef<HTMLDivElement>(null);
  const rotuloRef = useRef<HTMLDivElement>(null);

  const moveLente = useCallback((cx: number, cy: number) => {
    const box = boxRef.current;
    const lente = lenteRef.current;
    const rotulo = rotuloRef.current;
    if (!box || !lente || !rotulo) return;

    const r = box.getBoundingClientRect();
    const x = cx - r.left;
    const y = cy - r.top;

    if (x < 0 || y < 0 || x > r.width || y > r.height) {
      lente.style.display = "none";
      rotulo.classList.remove("anim-visivel");
      return;
    }

    lente.style.display = "block";
    lente.style.left = `${x}px`;
    lente.style.top = `${y}px`;
    lente.style.backgroundSize = `${r.width * ZOOM}px ${r.height * ZOOM}px`;
    lente.style.backgroundPosition = `${-(x * ZOOM - 85)}px ${-(y * ZOOM - 85)}px`;

    let marcadorProximo: HTMLElement | null = null;
    for (const m of box.querySelectorAll<HTMLElement>(".anim-marcador")) {
      const mr = m.getBoundingClientRect();
      const d = Math.hypot(mr.left + 7 - cx, mr.top + 7 - cy);
      if (d < 70) marcadorProximo = m;
    }

    if (marcadorProximo) {
      rotulo.textContent = marcadorProximo.dataset.rotulo ?? "";
      rotulo.style.left = marcadorProximo.style.left;
      rotulo.style.top = marcadorProximo.style.top;
      rotulo.classList.add("anim-visivel");
    } else {
      rotulo.classList.remove("anim-visivel");
    }
  }, []);

  return (
    <section className="anim-lupa-secao center">
      <div className="wrap">
        <h2 className="sec-titulo">O que o engenheiro enxerga</h2>
        <p className="anim-lupa-secao-intro">
          Passe a lupa sobre a imagem e veja como cada anomalia é identificada e
          classificada no laudo.
        </p>
        <div
          ref={boxRef}
          className="anim-magbox"
          style={{ backgroundImage: `url(${imagem})` }}
          onMouseMove={(e) => moveLente(e.clientX, e.clientY)}
          onMouseLeave={() => {
            if (lenteRef.current) lenteRef.current.style.display = "none";
            rotuloRef.current?.classList.remove("anim-visivel");
          }}
          onTouchMove={(e) => {
            const touch = e.touches[0];
            if (touch) moveLente(touch.clientX, touch.clientY);
          }}
        >
          {marcadores.map((m) => (
            <div
              key={m.rotulo}
              className="anim-marcador"
              style={{ left: m.left, top: m.top }}
              data-rotulo={m.rotulo}
            />
          ))}
          <div ref={lenteRef} className="anim-lente" />
          <div ref={rotuloRef} className="anim-rotulo" />
        </div>
      </div>
    </section>
  );
}
