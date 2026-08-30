const { TopBar, Hero, Servicos, Catalogo, Processo, Sobre, Marcas, Depoimentos, Cotacao, Perguntas, CTAFinal, Footer, WA } = window;

function useReveals() {
  React.useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.matchMedia("(max-width: 767px)").matches;
    const els = window.gsap ? window.gsap.utils.toArray("[data-reveal]") : [];
    if (!window.gsap || !els.length) return;
    const { gsap } = window;
    gsap.registerPlugin(window.ScrollTrigger);
    els.forEach(el => {
      gsap.set(el, { opacity: 0, y: reduce || small ? 0 : 40 });
      gsap.to(el, {
        opacity: 1, y: 0, duration: reduce ? 0.3 : small ? 0.5 : 0.9,
        ease: "expo.out",
        scrollTrigger: { trigger: el, start: "top 88%", once: true }
      });
    });
    window.ScrollTrigger.refresh();
    return () => window.ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);
}

function FloatingWhats() {
  return (
    <a className="wa-float" href={WA} target="_blank" rel="noopener" aria-label="Agendar no WhatsApp">
      <img src="https://unpkg.com/lucide-static@0.469.0/icons/message-circle.svg" alt="" width="20" height="20" style={{ filter: "invert(1)" }} />
      <span className="label wa-float-txt">Agendar</span>
    </a>
  );
}

function App() {
  useReveals();
  return (
    <div style={{ background: "var(--color-primary)" }}>
      <TopBar />
      <Hero />
      <Servicos />
      <Catalogo />
      <Processo />
      <Sobre />
      <Marcas />
      <Depoimentos />
      <Cotacao />
      <Perguntas />
      <CTAFinal />
      <Footer />
      <FloatingWhats />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
