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
  hidratado,
}: {
  valor: number;
  rotulo: string;
  ativo: boolean;
  hidratado: boolean;
}) {
  const [atual, setAtual] = useState(valor);

  useEffect(() => {
    if (!ativo || !hidratado) return;

    setAtual(0);
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
  }, [ativo, hidratado, valor]);

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
  const [hidratado, setHidratado] = useState(false);

  useEffect(() => {
    setHidratado(true);
  }, []);

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
              hidratado={hidratado}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
