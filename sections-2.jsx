const { Button, Card, GlassPanel, EyebrowLabel, Tag, Badge, MetricCard, SpecList, Input, Select, Checkbox, ProgressBar } = window.VelocityDesignSystem_e09b97;
const { Icon, Wrap, Section, SectionHead, Plate, CTAButton, WA, WA_MSG } = window;

function Sobre() {
  return (
    <Section id="oficina" light label="Oficina" style={{ paddingTop: 0 }}>
      <Wrap>
        <div className="about-grid">
          <div data-reveal className="about-media">
            <Plate id="about-shop" src="uploads/interior.jpg" placeholder="Foto: interior da oficina, bancada organizada, ferramentas" radius={18} style={{ minHeight: 340, height: "100%" }} />
          </div>
          <div data-reveal style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
            <EyebrowLabel tone="dark" rule>A oficina</EyebrowLabel>
            <h2 className="heading-lg" style={{ color: "var(--color-text-dark)" }}>Mesma bancada desde 2008.</h2>
            <p className="body-md" style={{ color: "var(--color-text-dark-secondary)", margin: 0, textWrap: "pretty" }}>Três elevadores, um dinamômetro de rolo e uma loja de peças no mesmo endereço. Quem diagnostica é quem executa — o serviço não passa por intermediário.</p>
            <SpecList tone="light" items={[
              { label: "Endereço", value: "Av. Industrial, 1420" },
              { label: "Elevadores", value: "3" },
              { label: "Mecânicos certificados", value: "6" },
              { label: "Prazo médio", value: "36 h" }
            ]} />
          </div>
        </div>
      </Wrap>
    </Section>
  );
}

const BRANDS = ["BOSCH", "NGK", "MONROE", "MAHLE", "SKF", "COFAP", "VARGA", "TEXACO"];

function Marcas() {
  const row = [...BRANDS, ...BRANDS];
  return (
    <section data-screen-label="Marcas" style={{ background: "var(--color-primary)", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)", padding: "var(--space-6) 0", overflow: "hidden" }}>
      <div className="marquee"><div className="marquee-track">
        {row.map((b, i) => (
          <span key={b + i} className="label" style={{ color: "var(--color-text-secondary)", display: "inline-flex", alignItems: "center", gap: "var(--space-8)", fontSize: 13 }}>
            <span style={{ color: "var(--color-accent)" }}>/</span>{b}
          </span>
        ))}
      </div></div>
    </section>
  );
}

const REVIEWS = [
  { q: "Passei em duas oficinas que só chutavam o problema. Aqui saiu o diagnóstico com foto e o valor não mudou na entrega.", n: "Rafael M.", c: "Golf TSI · Módulo de injeção" },
  { q: "Levei a moto na sexta e retirei no sábado, com relatório do que foi trocado e o que podia esperar.", n: "Juliana P.", c: "MT-07 · Revisão + freios" },
  { q: "Comprei o som e a instalação no mesmo lugar. Não sobrou fio à vista e a garantia é da loja.", n: "Anderson L.", c: "Hilux · Multimídia" }
];

function Depoimentos() {
  return (
    <Section id="clientes" label="Depoimentos" style={{ background: "var(--color-primary)" }}>
      <Wrap>
        <SectionHead eyebrow="Prova social" title="Quem já rodou com a gente." sub="412 avaliações públicas · nota média 4,9" />
        <div className="grid-3" style={{ marginTop: "var(--space-12)" }}>
          {REVIEWS.map(r => (
            <div data-reveal key={r.n}>
              <Card tone="inset" padding="var(--space-6)" style={{ height: "100%", display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
                <div style={{ display: "flex", gap: 3 }}>{[0, 1, 2, 3, 4].map(i => <Icon key={i} name="star" size={13} accent />)}</div>
                <p className="body-md" style={{ margin: 0, color: "var(--color-text-primary)", flex: 1, textWrap: "pretty" }}>{r.q}</p>
                <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "var(--space-4)" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15 }}>{r.n}</div>
                  <div className="label" style={{ color: "var(--color-text-secondary)" }}>{r.c}</div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Wrap>
    </Section>
  );
}

function Cotacao() {
  const [f, setF] = React.useState({ nome: "", tel: "", veiculo: "", tipo: "Carro", servico: "Revisão completa", obs: "" });
  const [sent, setSent] = React.useState(false);
  const set = k => e => setF({ ...f, [k]: e.target.value });
  const filled = ["nome", "tel", "veiculo"].filter(k => f[k].trim()).length;
  const submit = () => {
    const msg = WA_MSG + "\n\nNome: " + (f.nome || "—") + "\nTelefone: " + (f.tel || "—") + "\nVeículo: " + (f.veiculo || "—") + " (" + f.tipo + ")\nServiço: " + f.servico + (f.obs ? "\nObs: " + f.obs : "");
    setSent(true);
    window.open("https://wa.me/5511999999999?text=" + encodeURIComponent(msg), "_blank", "noopener");
  };
  return (
    <Section id="orcamento" label="Orçamento" style={{ background: "var(--gradient-hero)" }}>
      <Wrap>
        <div className="form-grid">
          <div data-reveal style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
            <EyebrowLabel rule>Orçamento</EyebrowLabel>
            <h2 className="heading-lg">Descreva o sintoma.<br />Recebe o valor hoje.</h2>
            <p className="body-md" style={{ color: "var(--text-body)", margin: 0, maxWidth: 420, textWrap: "pretty" }}>O formulário abre o WhatsApp já preenchido com os dados do seu veículo. Retorno de um mecânico em até 15 minutos no horário comercial.</p>
            <SpecList items={[
              { label: "Retorno", value: "≤ 15 min" },
              { label: "Diagnóstico", value: "Mesmo dia" },
              { label: "Garantia", value: "12 meses" }
            ]} />
          </div>
          <div data-reveal>
            <GlassPanel padding="var(--space-6)" style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-4)" }}>
                <EyebrowLabel tone="bright">Solicitar orçamento</EyebrowLabel>
                <span className="label" style={{ color: "var(--color-text-secondary)" }}>{filled}/3</span>
              </div>
              <ProgressBar value={(filled / 3) * 100} />
              <div className="form-row">
                <Input label="Nome" placeholder="Como te chamamos" value={f.nome} onChange={set("nome")} />
                <Input label="Telefone" placeholder="(11) 90000-0000" value={f.tel} onChange={set("tel")} />
              </div>
              <div className="form-row">
                <Input label="Veículo / modelo" placeholder="Ex.: Onix 2019" value={f.veiculo} onChange={set("veiculo")} />
                <Select label="Tipo" options={["Carro", "Moto"]} value={f.tipo} onChange={set("tipo")} />
              </div>
              <Select label="Serviço" options={["Revisão completa", "Diagnóstico eletrônico", "Freios e suspensão", "Motor e câmbio", "Elétrica e som", "Compra de peça / equipamento"]} value={f.servico} onChange={set("servico")} />
              <Input label="Sintoma (opcional)" placeholder="Ex.: barulho ao frear a frio" value={f.obs} onChange={set("obs")} />
              <Button variant="accent" size="lg" full onClick={submit} iconAfter={<Icon name="arrow-right" size={16} />}>Enviar e agendar no WhatsApp</Button>
              <span className="label" style={{ color: "var(--color-text-secondary)", letterSpacing: ".04em" }}>{sent ? "Solicitação aberta no WhatsApp · dados anexados" : "Sem cobrança pelo orçamento · dados usados só para contato"}</span>
            </GlassPanel>
          </div>
        </div>
      </Wrap>
    </Section>
  );
}

const FAQ = [
  { q: "O orçamento é cobrado?", a: "Não. O orçamento é gratuito. O diagnóstico eletrônico custa R$ 149 e é abatido caso o serviço seja aprovado." },
  { q: "Atendem motos de qualquer cilindrada?", a: "Sim, de 125cc a big trails. Para motos esportivas com módulo proprietário confirme o modelo antes de agendar." },
  { q: "Posso levar minha própria peça?", a: "Pode. A mão de obra tem garantia de 12 meses; a peça de terceiro fica sob responsabilidade do fornecedor dela." },
  { q: "Quanto tempo fica o veículo na oficina?", a: "Prazo médio de 36 horas. Serviços de revisão e freios normalmente saem no mesmo dia se agendados até 10h." },
  { q: "Compro a peça e instalo aí?", a: "Sim. A loja e a oficina são o mesmo endereço, então a instalação já entra no orçamento da peça." },
  { q: "Formas de pagamento?", a: "Pix, débito e crédito em até 6x sem juros. Nota fiscal em todo serviço e toda peça." }
];

function Perguntas() {
  const [open, setOpen] = React.useState(0);
  return (
    <Section id="faq" label="FAQ" style={{ background: "var(--color-primary)" }}>
      <Wrap>
        <div className="faq-grid">
          <div data-reveal><SectionHead eyebrow="FAQ" title="Perguntas diretas." /></div>
          <div data-reveal style={{ display: "grid" }}>
            {FAQ.map((it, i) => {
              const on = open === i;
              return (
                <div key={it.q} style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <button type="button" onClick={() => setOpen(on ? -1 : i)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-4)", background: "none", border: 0, padding: "var(--space-5) 0", cursor: "pointer", textAlign: "left", color: "var(--color-text-primary)", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 17, letterSpacing: "var(--tracking-heading)" }}>
                    {it.q}
                    <span style={{ transition: "transform var(--duration-normal) var(--ease-premium)", transform: on ? "rotate(180deg)" : "none", display: "flex" }}><Icon name="chevron-down" size={16} /></span>
                  </button>
                  <div style={{ overflow: "hidden", maxHeight: on ? 200 : 0, opacity: on ? 1 : 0, transition: "max-height var(--duration-slow) var(--ease-premium), opacity var(--duration-normal) var(--ease-standard)" }}>
                    <p className="body-sm" style={{ color: "var(--text-body)", margin: 0, paddingBottom: "var(--space-5)", maxWidth: 560, textWrap: "pretty" }}>{it.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Wrap>
    </Section>
  );
}

function CTAFinal() {
  return (
    <Section label="CTA final" style={{ background: "var(--color-primary)", paddingTop: 0 }}>
      <Wrap>
        <div data-reveal style={{ position: "relative", borderRadius: "var(--radius-card)", overflow: "hidden", border: "1px solid var(--color-border)", boxShadow: "var(--shadow-atmos-lg)", background: "var(--gradient-metal)" }}>
          <div className="cta-final">
            <div>
              <h2 className="heading-lg" style={{ textTransform: "uppercase" }}>Seu carro<br />no elevador<span style={{ color: "var(--color-accent)" }}>.</span></h2>
              <p className="label" style={{ color: "var(--color-text-secondary)", marginTop: 16, lineHeight: 1.7 }}>Agende pelo WhatsApp e receba o horário disponível na sequência.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", minWidth: 240 }}>
              <CTAButton />
              <a href="tel:+551140028922" style={{ textDecoration: "none" }}><Button variant="glass" size="lg" full icon={<Icon name="phone" size={16} />}>(11) 4002-8922</Button></a>
            </div>
          </div>
        </div>
      </Wrap>
    </Section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "var(--color-primary)", borderTop: "1px solid var(--color-border)", padding: "var(--space-10) 0" }}>
      <Wrap>
        <div className="foot">
          <div>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, letterSpacing: ".14em", color: "var(--color-text-primary)" }}>TORQUE<span style={{ color: "var(--color-accent)" }}>.</span></span>
            <p className="body-sm" style={{ color: "var(--text-body)", marginTop: 12, maxWidth: 280 }}>Mecânica de carros e motos, loja de peças e equipamentos. Av. Industrial, 1420.</p>
          </div>
          <div>
            <EyebrowLabel>Horário</EyebrowLabel>
            <p className="body-sm" style={{ color: "var(--text-body)", marginTop: 12 }}>Seg a sex · 08h–18h<br />Sáb · 08h–13h</p>
          </div>
          <div>
            <EyebrowLabel>Contato</EyebrowLabel>
            <p className="body-sm" style={{ color: "var(--text-body)", marginTop: 12 }}><a href="tel:+551140028922">(11) 4002-8922</a><br /><a href={WA} target="_blank" rel="noopener">WhatsApp</a></p>
          </div>
        </div>
        <div className="label" style={{ color: "var(--color-text-muted)", marginTop: "var(--space-8)" }}>© 2026 Torque Mecânica · CNPJ 00.000.000/0001-00</div>
      </Wrap>
    </footer>
  );
}

Object.assign(window, { Sobre, Marcas, Depoimentos, Cotacao, Perguntas, CTAFinal, Footer });
