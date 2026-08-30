const { Button, IconButton, EyebrowLabel, GlassPanel } = window.VelocityDesignSystem_e09b97;

const WA_MSG = "Olá! Gostaria de agendar um serviço para meu veículo. Como posso verificar os horários disponíveis?";
const WA = "https://wa.me/5511999999999?text=" + encodeURIComponent(WA_MSG);

function Icon({ name, size = 16, accent, style }) {
  return <img src={"https://unpkg.com/lucide-static@0.469.0/icons/" + name + ".svg"} alt="" width={size} height={size} style={{ filter: accent ? "invert(28%) sepia(87%) saturate(3000%) hue-rotate(343deg) brightness(96%) contrast(92%)" : "invert(1)", opacity: accent ? 1 : .9, flex: "0 0 auto", ...style }} />;
}

function Wrap({ children, style, ...rest }) {
  return <div className="wrap" style={style} {...rest}>{children}</div>;
}

function Section({ id, light, children, style, label, ...rest }) {
  return (
    <section id={id} className="sec" data-screen-label={label} style={{ background: light ? "var(--surface-page-light)" : "transparent", color: light ? "var(--color-text-dark)" : "var(--color-text-primary)", ...style }} {...rest}>{children}</section>
  );
}

function SectionHead({ eyebrow, title, sub, light, align = "left" }) {
  return (
    <div data-reveal style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", maxWidth: 640, marginInline: align === "center" ? "auto" : undefined, textAlign: align }}>
      <EyebrowLabel tone={light ? "dark" : "muted"} rule={align === "left"}>{eyebrow}</EyebrowLabel>
      <h2 className="heading-lg" style={{ color: light ? "var(--color-text-dark)" : "var(--text-heading)" }}>{title}</h2>
      {sub && <p className="body-md" style={{ color: light ? "var(--color-text-dark-secondary)" : "var(--text-body)", margin: 0, textWrap: "pretty" }}>{sub}</p>}
    </div>
  );
}

function Plate({ id, placeholder, radius = 16, src, style }) {
  return <div style={{ position: "relative", width: "100%", height: "100%", minHeight: 180, ...style }}><image-slot id={id} shape="rounded" radius={radius} placeholder={placeholder} src={src}></image-slot></div>;
}

function CTAButton({ size = "lg", variant = "accent", label = "Agendar orçamento", full }) {
  return (
    <a href={WA} target="_blank" rel="noopener" style={{ textDecoration: "none", display: full ? "block" : "inline-block" }}>
      <Button variant={variant} size={size} full={full} iconAfter={<Icon name="arrow-right" size={16} style={{ filter: variant === "accent" ? "invert(1)" : "invert(1)" }} />}>{label}</Button>
    </a>
  );
}

Object.assign(window, { Icon, Wrap, Section, SectionHead, Plate, CTAButton, WA, WA_MSG });
