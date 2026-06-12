import { LP_WHATSAPP } from "@/lib/landing-shared";

export interface SecaoDorProps {
  imagem: string;
  imagemAlt: string;
  titulo: string;
  texto: string;
  pontos?: string[];
  whatsappMsg: string;
  imagemDireita?: boolean;
}

export default function SecaoDor({
  imagem,
  imagemAlt,
  titulo,
  texto,
  pontos,
  whatsappMsg,
  imagemDireita = false,
}: SecaoDorProps) {
  const whatsappUrl = `https://wa.me/${LP_WHATSAPP}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <section className="lp-dor center">
      <div
        className={`wrap lp-dor-grid${imagemDireita ? " lp-dor-grid--direita" : ""}`}
      >
        <div className="lp-dor-img">
          <img src={imagem} alt={imagemAlt} loading="lazy" />
        </div>
        <div className="lp-dor-txt">
          <h2 className="lp-dor-titulo">{titulo}</h2>
          <p>{texto}</p>
          {pontos && pontos.length > 0 && (
            <ul className="lp-dor-pontos">
              {pontos.map((ponto) => (
                <li key={ponto}>{ponto}</li>
              ))}
            </ul>
          )}
          <a
            href={whatsappUrl}
            className="btn lp-dor-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
