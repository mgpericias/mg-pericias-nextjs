import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <section className="center" style={{ background: "#fff", minHeight: "50vh" }}>
        <div className="wrap">
          <h2 className="sec-titulo">Página não encontrada</h2>
          <p className="sec-sub">O conteúdo que você procura não existe ou foi movido.</p>
          <a href="/" className="btn">Voltar ao início</a>
        </div>
      </section>
      <Footer />
    </>
  );
}
