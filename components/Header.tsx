import Link from "next/link";

type Props = {
  contatoHref?: string;
  variant?: "default" | "lp";
};

export default function Header({ contatoHref = "/#contato", variant = "default" }: Props) {
  if (variant === "lp") {
    return (
      <header>
        <div className="wrap nav nav-lp">
          <Link href="/">
            <img
              className="logo"
              src="/images/logo-mgpericias.png"
              alt="MG Perícias"
            />
          </Link>
          <a href={contatoHref} className="btn nav-lp-cta">
            Receber proposta em 24h
          </a>
        </div>
      </header>
    );
  }

  return (
    <header>
      <div className="wrap nav">
        <Link href="/">
          <img
            className="logo"
            src="/images/logo-mgpericias.png"
            alt="MG Perícias"
          />
        </Link>
        <ul className="menu">
          <li><a href="/#inicio">Início</a></li>
          <li><a href="/#servicos">Serviços</a></li>
          <li><a href="/#quem-somos">Quem Somos</a></li>
          <li><a href="/#avaliacoes">Avaliações</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href={contatoHref}>Contato</a></li>
        </ul>
      </div>
    </header>
  );
}
