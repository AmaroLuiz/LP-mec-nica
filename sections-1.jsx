const { Button, IconButton, Card, GlassPanel, EyebrowLabel, Tag, Badge, MetricCard, SpecList, Tabs } = window.VelocityDesignSystem_e09b97;
const { Icon, Wrap, Section, SectionHead, Plate, CTAButton, WA } = window;

const NAV_ITEMS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Catálogo", href: "#catalogo" },
  { label: "Processo", href: "#processo" },
  { label: "Oficina", href: "#oficina" },
  { label: "Orçamento", href: "#orcamento" }
];

function TopBar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 60 }}>
      <header className="topbar" style={{ display: "flex", alignItems: "center", gap: "var(--space-10)", height: 64, padding: "0 clamp(20px,4vw,48px)", background: scrolled ? "rgba(17,19,21,.72)" : "transparent", backdropFilter: scrolled ? "var(--blur-glass)" : "none", WebkitBackdropFilter: scrolled ? "var(--blur-glass)" : "none", borderBottom: "1px solid " + (scrolled ? "var(--color-border)" : "transparent"), color: "var(--color-text-primary)", transition: "background var(--duration-normal) var(--ease-standard), border-color var(--duration-normal) var(--ease-standard)" }}>
        <a href="#top" style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, letterSpacing: ".14em", color: "var(--color-text-primary)", textDecoration: "none" }}>TORQUE<span style={{ color: "var(--color-accent)" }}>.</span></a>
        <nav className="navlinks" style={{ display: "flex", alignItems: "center", gap: "var(--space-7)", flex: 1 }}>
          {NAV_ITEMS.map(it => <a key={it.label} className="navlink" href={it.href}>{it.label}</a>)}
        </nav>
        <div className="navcta" style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
          <span className="navphone label" style={{ color: "var(--color-text-secondary)" }}>(11) 4002-8922</span>
          <CTAButton size="md" label="Agendar" />
        </div>
        <button className="navburger" type="button" aria-label="Menu" onClick={() => setOpen(o => !o)} style={{ display: "none", background: "transparent", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", width: 40, height: 40, cursor: "pointer", alignItems: "center", justifyContent: "center" }}>
          <Icon name={open ? "x" : "menu"} size={18} />
        </button>
      </header>
      {open && (
        <GlassPanel padding="var(--space-4)" radius="0" style={{ borderLeft: 0, borderRight: 0, display: "grid", gap: "var(--space-2)" }}>
          {NAV_ITEMS.map(it => <a key={it.label} className="navlink" href={it.href} onClick={() => setOpen(false)} style={{ padding: "10px 4px" }}>{it.label}</a>)}
          <CTAButton size="md" full label="Agendar orçamento" />
        </GlassPanel>
      )}
    </div>
  );
}

function Hero() {
  return (
    <section id="top" data-screen-label="Hero" style={{ position: "relative", background: "var(--gradient-hero)", paddingTop: 112, paddingBottom: 0 }}>
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}><div style={{ position: "absolute", inset: "-10% -20% 30%", background: "radial-gradient(60% 50% at 50% 40%, rgba(255,255,255,.12), transparent 70%)" }} /></div>
      <Wrap style={{ position: "relative" }}>
        <div className="hero-grid">
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
            <div data-reveal><Tag>Carros e motos</Tag></div>
            <h1 data-reveal className="display-lg" style={{ textTransform: "uppercase" }}>Diagnóstico.<br />Sem achismo<span style={{ color: "var(--color-accent)" }}>.</span></h1>
            <p data-reveal className="label" style={{ color: "var(--color-text-secondary)", lineHeight: 1.7, maxWidth: 360 }}>Orçamento fechado antes de abrir o motor.<br />Peças e equipamentos com nota e garantia.</p>
            <div data-reveal style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-3)" }}>
              <CTAButton />
              <a href="#catalogo" style={{ textDecoration: "none" }}><Button variant="glass" size="lg">Ver catálogo</Button></a>
            </div>
            <div data-reveal style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
              <span style={{ width: 7, height: 7, borderRadius: 999, background: "var(--color-accent)", boxShadow: "0 0 0 4px var(--color-accent-glow)" }} />
              <span className="label" style={{ color: "var(--color-text-secondary)" }}>Aberto hoje · 08h às 18h · Retorno em até 15 min</span>
            </div>
          </div>
          <div data-reveal className="hero-media">
            <Plate id="hero-car" src="uploads/carroNoElevador.jpg" placeholder="Foto: carro no elevador da oficina, luz fria, chão escuro"  radius={18} style={{ minHeight: 300, height: "100%" }} />
          </div>
        </div>
        <div className="hud" data-reveal>
          <MetricCard label="Anos de oficina" value={18} countUp />
          <MetricCard label="Serviços/mês" value={430} countUp unit="+" />
          <MetricCard label="Garantia" value={12} unit=" meses" />
          <MetricCard label="Aprovação" value={98} countUp unit="%" />
        </div>
      </Wrap>
    </section>
  );
}

const SERVICES = [
  { icon: "wrench", title: "Revisão completa", desc: "Checklist de 42 pontos, fluidos, filtros e correias com relatório fotográfico.", price: "a partir de R$ 289" },
  { icon: "gauge", title: "Diagnóstico eletrônico", desc: "Leitura de módulos e telemetria do veículo antes de qualquer intervenção.", price: "R$ 149 · abatido no serviço" },
  { icon: "disc-3", title: "Freios e suspensão", desc: "Discos, pastilhas, amortecedores e geometria com teste em pista curta.", price: "a partir de R$ 420" },
  { icon: "cog", title: "Motor e câmbio", desc: "Retífica, embreagem e troca de correntes com peças rastreadas por lote.", price: "orçamento fechado" },
  { icon: "bike", title: "Motos · alta e baixa", desc: "Injeção, transmissão por corrente, suspensão e preparação para viagem.", price: "a partir de R$ 180" },
  { icon: "battery-charging", title: "Elétrica e som", desc: "Alternador, partida, multimídia e instalação de equipamentos vendidos aqui.", price: "a partir de R$ 210" }
];

function Servicos() {
  return (
    <Section id="servicos" label="Serviços" style={{ background: "var(--color-primary)" }}>
      <Wrap>
        <SectionHead eyebrow="Serviços" title="O que entra no elevador." sub="Carro ou moto, o preço sai antes do serviço começar. Nada é executado sem aprovação por escrito." />
        <div className="grid-3" style={{ marginTop: "var(--space-12)" }}>
          {SERVICES.map(s => (
            <div data-reveal key={s.title}>
              <Card tone="dark" interactive padding="var(--space-6)" style={{ height: "100%", display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                <Icon name={s.icon} size={20} />
                <h3 className="heading-md" style={{ fontSize: 22 }}>{s.title}</h3>
                <p className="body-sm" style={{ color: "var(--text-body)", margin: 0, flex: 1, textWrap: "pretty" }}>{s.desc}</p>
                <span className="label" style={{ color: "var(--color-accent)" }}>{s.price}</span>
              </Card>
            </div>
          ))}
        </div>
      </Wrap>
    </Section>
  );
}

const CATS = [
  { id: "cat-1", title: "Peças de motor", n: "128 itens", shot: "Foto: bloco de motor sobre bancada escura", img: "uploads/motor.png" },
  { id: "cat-2", title: "Freios", n: "94 itens", shot: "Foto: disco de freio ventilado, luz lateral", img: "uploads/disco.png" },
  { id: "cat-3", title: "Suspensão", n: "76 itens", shot: "Foto: amortecedor em close", img: "uploads/amortecedor.png" },
  { id: "cat-4", title: "Elétrica", n: "112 itens", shot: "Foto: velas e bobinas alinhadas", img: "uploads/velas.png" },
  { id: "cat-5", title: "Multimídia e som", n: "58 itens", shot: "Foto: central multimídia instalada", img: "uploads/multmidia.png" },
  { id: "cat-6", title: "Filtros e óleos", n: "140 itens", shot: "Foto: filtros e galões de óleo", img: "uploads/oleo.png" }
];

function Catalogo() {
  return (
    <Section id="catalogo" label="Catálogo" style={{ background: "var(--color-primary)", paddingTop: 0 }}>
      <Wrap>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "var(--space-6)" }}>
          <SectionHead eyebrow="Equipamentos" title="Catálogo da loja." sub="Peças e acessórios vendidos com instalação na própria oficina — sem terceirizar o serviço." />
          <div data-reveal><CTAButton size="md" variant="glass" label="Consultar peça" /></div>
        </div>
        <div className="grid-3 cat-grid" style={{ marginTop: "var(--space-12)" }}>
          {CATS.map((c, i) => (
            <a data-reveal key={c.id} href={WA} target="_blank" rel="noopener" className="cat-card" style={{ textDecoration: "none", color: "inherit", gridColumn: i === 0 ? "span 1" : undefined }}>
              <Card tone="dark" interactive padding="var(--space-5)" media={<div style={{ height: 180 }}><Plate id={c.id} src={c.img} placeholder={c.shot} radius={0} style={{ minHeight: 180, height: 180 }} /></div>}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-4)" }}>
                  <div>
                    <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 18, letterSpacing: "var(--tracking-heading)" }}>{c.title}</h3>
                    <span className="label" style={{ color: "var(--color-text-secondary)" }}>{c.n}</span>
                  </div>
                  <Icon name="arrow-right" size={16} />
                </div>
              </Card>
            </a>
          ))}
        </div>
      </Wrap>
    </Section>
  );
}

const STEPS = [
  { n: "01", t: "Você descreve o problema", d: "Manda o modelo, o ano e o sintoma pelo WhatsApp. Sem formulário longo." },
  { n: "02", t: "Diagnóstico no mesmo dia", d: "Leitura eletrônica e inspeção visual, com fotos das peças em questão." },
  { n: "03", t: "Orçamento fechado", d: "Valor por item, prazo e garantia. Nada começa sem o seu de acordo." },
  { n: "04", t: "Execução e entrega", d: "Acompanhamento por mensagem e teste em rodagem antes da devolução." }
];

function Processo() {
  return (
    <Section id="processo" light label="Processo" style={{ position: "relative" }}>
      <Wrap>
        <SectionHead light eyebrow="Como funciona" title="Quatro etapas, nenhuma surpresa." />
        <div className="grid-4" style={{ marginTop: "var(--space-12)" }}>
          {STEPS.map(s => (
            <div data-reveal key={s.n} style={{ borderTop: "1px solid var(--color-border-dark)", paddingTop: "var(--space-5)" }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 40, letterSpacing: "-.04em", color: "var(--color-accent)", lineHeight: 1 }}>{s.n}</span>
              <h3 className="heading-md" style={{ fontSize: 20, marginTop: 12, color: "var(--color-text-dark)" }}>{s.t}</h3>
              <p className="body-sm" style={{ color: "var(--color-text-dark-secondary)", marginTop: 8, textWrap: "pretty" }}>{s.d}</p>
            </div>
          ))}
        </div>
      </Wrap>
    </Section>
  );
}

Object.assign(window, { TopBar, Hero, Servicos, Catalogo, Processo });
