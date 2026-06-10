"use client";

import { useEffect, useRef, useState } from "react";

type Item = {
  valor: number;
  rotulo: string;
};

const DURACAO_MS = 1500;

function NumeroAnimado({
  valor,
  rotulo,
  ativo,
}: {
  valor: number;
  rotulo: string;
  ativo: boolean;
}) {
  const [atual, setAtual] = useState(0);

  useEffect(() => {
    if (!ativo) return;

    const inicio = performance.now();
    let frame = 0;

    const tick = (agora: number) => {
      const progresso = Math.min((agora - inicio) / DURACAO_MS, 1);
      setAtual(Math.round(valor * progresso));
      if (progresso < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [ativo, valor]);

  return (
    <div className="num">
      <span className="v">+{atual}</span>
      <span className="l">{rotulo}</span>
    </div>
  );
}

export default function ContadorNumeros({ itens }: { itens: Item[] }) {
  const secaoRef = useRef<HTMLElement>(null);
  const [ativo, setAtivo] = useState(false);

  useEffect(() => {
    const el = secaoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setAtivo(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="numeros" ref={secaoRef}>
      <div className="wrap">
        <div className="num-row">
          {itens.map((item) => (
            <NumeroAnimado
              key={item.rotulo}
              valor={item.valor}
              rotulo={item.rotulo}
              ativo={ativo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
