export default function Header() {
  return (
    <header>
      <div className="wrap nav">
        <img
          className="logo"
          src="/images/logo-mgpericias.png"
          alt="MG Perícias"
        />
        <ul className="menu">
          <li><a href="/#inicio">Início</a></li>
          <li><a href="/#servicos">Serviços</a></li>
          <li><a href="/#quem-somos">Quem Somos</a></li>
          <li><a href="/#avaliacoes">Avaliações</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/#contato">Contato</a></li>
        </ul>
      </div>
    </header>
  );
}
