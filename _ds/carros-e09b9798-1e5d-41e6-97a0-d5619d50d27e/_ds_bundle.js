/* @ds-bundle: {"format":4,"namespace":"VelocityDesignSystem_e09b97","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"EyebrowLabel","sourcePath":"components/core/EyebrowLabel.jsx"},{"name":"GlassPanel","sourcePath":"components/core/GlassPanel.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"BarSpark","sourcePath":"components/data/BarSpark.jsx"},{"name":"MetricCard","sourcePath":"components/data/MetricCard.jsx"},{"name":"SpecList","sourcePath":"components/data/SpecList.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"fa0a9eddac05","components/core/Button.jsx":"02bab28bf040","components/core/Card.jsx":"686431fc9405","components/core/EyebrowLabel.jsx":"85f2929ebb44","components/core/GlassPanel.jsx":"a1600971bd29","components/core/IconButton.jsx":"9ef32f5230f0","components/core/Tag.jsx":"2cc31511eb40","components/data/BarSpark.jsx":"18e1dbc10406","components/data/MetricCard.jsx":"772fe9847b8e","components/data/SpecList.jsx":"8d833d0b363b","components/feedback/Dialog.jsx":"5106636855de","components/feedback/ProgressBar.jsx":"a7748cddfa08","components/feedback/Toast.jsx":"094c502df020","components/feedback/Tooltip.jsx":"91f37dc9986c","components/forms/Checkbox.jsx":"ac728a0a7895","components/forms/Input.jsx":"a7fcf6610036","components/forms/Radio.jsx":"c823b0969efc","components/forms/Select.jsx":"3c47855b74a9","components/forms/Switch.jsx":"17d44e366228","components/navigation/NavBar.jsx":"fa877c13b5e8","components/navigation/Tabs.jsx":"8837bc175a53","ui_kits/marketing_site/DashboardSection.jsx":"294a1994722e","ui_kits/marketing_site/Hero.jsx":"96f3c78ed56d","ui_kits/marketing_site/Icon.jsx":"0d4a0f0e2bd9","ui_kits/marketing_site/InteriorSection.jsx":"00aa63bf6aa6","ui_kits/marketing_site/ReserveSection.jsx":"0afedde58d44","ui_kits/marketing_site/SiteFooter.jsx":"4c7e51ee806e","ui_kits/performance_app/AppIcon.jsx":"911f730255dc","ui_kits/performance_app/AppShell.jsx":"8768a978edf7","ui_kits/performance_app/ChargeScreen.jsx":"f9ab5960de51","ui_kits/performance_app/DriveScreen.jsx":"1119d8063d49","ui_kits/performance_app/RouteScreen.jsx":"e9de3775cb86"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.VelocityDesignSystem_e09b97 = window.VelocityDesignSystem_e09b97 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  tone = "accent",
  count,
  children,
  style,
  ...rest
}) {
  const tones = {
    accent: {
      background: "var(--color-accent)",
      color: "#fff"
    },
    neutral: {
      background: "rgba(255,255,255,.14)",
      color: "var(--color-text-primary)"
    },
    positive: {
      background: "var(--signal-positive)",
      color: "#0B1F14"
    },
    warning: {
      background: "var(--signal-warning)",
      color: "#2A1E06"
    }
  };
  const label = count != null ? String(count) : children;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: 18,
      height: 18,
      padding: "0 5px",
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-body)",
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: ".02em",
      ...(tones[tone] || tones.accent),
      ...style
    }
  }, rest), label);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: "0 var(--space-3)",
    height: 32,
    font: "var(--text-body-sm)"
  },
  md: {
    padding: "0 var(--space-4)",
    height: 40,
    font: "var(--text-body-sm)"
  },
  lg: {
    padding: "0 var(--space-6)",
    height: 48,
    font: "var(--text-body-md)"
  }
};
function Button({
  variant = "primary",
  size = "md",
  icon,
  iconAfter,
  disabled,
  full,
  children,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--space-2)",
    height: s.height,
    padding: s.padding,
    width: full ? "100%" : undefined,
    fontFamily: "var(--font-body)",
    fontSize: s.font,
    fontWeight: 500,
    letterSpacing: "0.01em",
    borderRadius: "var(--radius-button)",
    border: "1px solid transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.4 : 1,
    whiteSpace: "nowrap",
    transition: "transform var(--duration-fast) var(--ease-premium), background var(--duration-normal) var(--ease-standard), filter var(--duration-fast) var(--ease-standard), border-color var(--duration-normal) var(--ease-standard)",
    transform: disabled ? "none" : press ? "translateY(0) scale(0.995)" : hover ? "translateY(-2px)" : "none",
    filter: !disabled && hover ? "brightness(1.05)" : "none"
  };
  const variants = {
    primary: {
      background: "var(--color-text-primary)",
      color: "var(--color-text-dark)",
      boxShadow: "var(--shadow-atmos)"
    },
    accent: {
      background: "var(--color-accent)",
      color: "#fff",
      boxShadow: "0 12px 30px var(--color-accent-glow)"
    },
    glass: {
      background: "var(--glass-fill)",
      color: "var(--color-text-primary)",
      borderColor: "var(--color-border-strong)",
      backdropFilter: "var(--blur-glass)",
      WebkitBackdropFilter: "var(--blur-glass)",
      boxShadow: "var(--shadow-glass)"
    },
    ghost: {
      background: "transparent",
      color: "var(--color-text-primary)",
      borderColor: "var(--color-border)"
    },
    quiet: {
      background: "transparent",
      color: "var(--color-text-secondary)"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onClick: onClick,
    style: {
      ...base,
      ...(variants[variant] || variants.primary),
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, rest), icon, children, iconAfter);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  tone = "dark",
  padding = "var(--space-6)",
  interactive,
  media,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    dark: {
      background: "var(--color-secondary)",
      color: "var(--color-text-primary)",
      border: "1px solid var(--color-border)"
    },
    inset: {
      background: "var(--surface-inset)",
      color: "var(--color-text-primary)",
      border: "1px solid var(--color-border)"
    },
    light: {
      background: "#fff",
      color: "var(--color-text-dark)",
      border: "1px solid var(--color-border-dark)"
    },
    metal: {
      background: "var(--gradient-metal)",
      color: "var(--color-text-primary)",
      border: "1px solid var(--color-border)"
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: "var(--radius-card)",
      overflow: "hidden",
      transition: "transform var(--duration-normal) var(--ease-premium), box-shadow var(--duration-normal) var(--ease-premium)",
      transform: interactive && hover ? "translateY(-2px)" : "none",
      boxShadow: interactive && hover ? "var(--shadow-atmos-lg)" : "var(--shadow-atmos)",
      ...(tones[tone] || tones.dark),
      ...style
    }
  }, rest), media && /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "hidden"
    }
  }, media), /*#__PURE__*/React.createElement("div", {
    style: {
      padding
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/EyebrowLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function EyebrowLabel({
  children,
  tone = "muted",
  rule = false,
  style,
  ...rest
}) {
  const colors = {
    muted: "var(--color-text-secondary)",
    bright: "var(--color-text-primary)",
    accent: "var(--color-accent)",
    dark: "var(--color-text-dark-secondary)"
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-caption)",
      fontWeight: 500,
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: colors[tone] || colors.muted,
      ...style
    }
  }, rest), children, rule && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 1,
      background: "currentColor",
      opacity: 0.4
    }
  }));
}
Object.assign(__ds_scope, { EyebrowLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/EyebrowLabel.jsx", error: String((e && e.message) || e) }); }

// components/core/GlassPanel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function GlassPanel({
  strong,
  blur = "var(--blur-glass)",
  padding = "var(--space-4)",
  radius = "var(--radius-glass)",
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: strong ? "var(--glass-fill-strong)" : "var(--glass-fill)",
      backdropFilter: blur,
      WebkitBackdropFilter: blur,
      border: "1px solid var(--color-border-strong)",
      borderRadius: radius,
      boxShadow: "var(--shadow-glass)",
      color: "var(--color-text-primary)",
      padding,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { GlassPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/GlassPanel.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 28,
  md: 36,
  lg: 44
};
function IconButton({
  variant = "ghost",
  size = "md",
  label,
  active,
  disabled,
  children,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const d = SIZES[size] || SIZES.md;
  const variants = {
    ghost: {
      background: "transparent",
      border: "1px solid var(--color-border)"
    },
    glass: {
      background: "var(--glass-fill)",
      border: "1px solid var(--color-border-strong)",
      backdropFilter: "var(--blur-glass)",
      WebkitBackdropFilter: "var(--blur-glass)"
    },
    solid: {
      background: "var(--color-secondary)",
      border: "1px solid var(--color-border)"
    },
    bare: {
      background: "transparent",
      border: "1px solid transparent"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    "aria-pressed": active,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: d,
      height: d,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-md)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.4 : 1,
      color: active ? "var(--color-accent)" : "var(--color-text-primary)",
      transition: "transform var(--duration-fast) var(--ease-premium), border-color var(--duration-normal) var(--ease-standard), color var(--duration-fast) var(--ease-standard)",
      transform: hover && !disabled ? "translateY(-2px)" : "none",
      borderColor: hover && !disabled ? "var(--color-border-strong)" : undefined,
      ...(variants[variant] || variants.ghost),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  tone = "neutral",
  dot,
  children,
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      background: "rgba(255,255,255,.08)",
      color: "var(--color-text-primary)",
      border: "1px solid var(--color-border)"
    },
    accent: {
      background: "rgba(227,59,59,.14)",
      color: "#F0A3A3",
      border: "1px solid rgba(227,59,59,.4)"
    },
    outline: {
      background: "transparent",
      color: "var(--color-text-secondary)",
      border: "1px solid var(--color-border-strong)"
    },
    dark: {
      background: "rgba(17,19,21,.06)",
      color: "var(--color-text-dark)",
      border: "1px solid var(--color-border-dark)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      height: 24,
      padding: "0 var(--space-3)",
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-caption)",
      fontWeight: 500,
      letterSpacing: "var(--tracking-label-tight)",
      textTransform: "uppercase",
      ...(tones[tone] || tones.neutral),
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: "50%",
      background: tone === "accent" ? "var(--color-accent)" : "currentColor"
    }
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/BarSpark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function BarSpark({
  values,
  bars = 14,
  width = 96,
  height = 40,
  accentIndex = -1,
  gap = 3,
  animate = true,
  style,
  ...rest
}) {
  const data = values && values.length ? values : Array.from({
    length: bars
  }, (_, i) => 0.18 + Math.pow(i / (bars - 1), 1.7) * 0.82);
  const [on, setOn] = React.useState(!animate);
  React.useEffect(() => {
    const t = setTimeout(() => setOn(true), 80);
    return () => clearTimeout(t);
  }, []);
  const accent = accentIndex < 0 ? data.length + accentIndex : accentIndex;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap,
      width,
      height,
      ...style
    }
  }, rest), data.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: on ? Math.max(2, v * height) : 2,
      borderRadius: 1,
      background: i >= accent ? "var(--color-accent)" : "rgba(245,245,243,.55)",
      transition: "height var(--duration-slow) var(--ease-premium)",
      transitionDelay: i * 28 + "ms"
    }
  })));
}
Object.assign(__ds_scope, { BarSpark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/BarSpark.jsx", error: String((e && e.message) || e) }); }

// components/data/MetricCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useCountUp(target, run) {
  const [v, setV] = React.useState(0);
  React.useEffect(() => {
    if (!run || typeof target !== "number") return;
    let raf, start;
    const dur = 1200;
    const step = t => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(target * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, run]);
  return v;
}
function MetricCard({
  label,
  value,
  unit,
  decimals = 0,
  countUp = false,
  surface = "glass",
  chart,
  icon,
  style,
  ...rest
}) {
  const numeric = typeof value === "number";
  const counted = useCountUp(numeric ? value : 0, countUp && numeric);
  const shown = numeric ? (countUp ? counted : value).toFixed(decimals) : value;
  const surfaces = {
    glass: {
      background: "var(--glass-fill)",
      backdropFilter: "var(--blur-glass)",
      WebkitBackdropFilter: "var(--blur-glass)",
      border: "1px solid var(--color-border-strong)",
      boxShadow: "var(--shadow-glass)"
    },
    solid: {
      background: "var(--color-secondary)",
      border: "1px solid var(--color-border)",
      boxShadow: "var(--shadow-atmos)"
    },
    inset: {
      background: "var(--surface-inset)",
      border: "1px solid var(--color-border)"
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: "var(--space-4)",
      padding: "var(--space-4)",
      borderRadius: "var(--radius-glass)",
      color: "var(--color-text-primary)",
      ...(surfaces[surface] || surfaces.glass),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-caption)",
      fontWeight: 500,
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--color-text-secondary)"
    }
  }, icon, label), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-2)",
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 34,
      lineHeight: 1,
      letterSpacing: "var(--tracking-heading)"
    }
  }, shown, unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      marginLeft: 2
    }
  }, unit))), chart && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "0 0 auto"
    }
  }, chart));
}
Object.assign(__ds_scope, { MetricCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/MetricCard.jsx", error: String((e && e.message) || e) }); }

// components/data/SpecList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SpecList({
  items = [],
  tone = "dark",
  columns = 1,
  style,
  ...rest
}) {
  const light = tone === "light";
  return /*#__PURE__*/React.createElement("dl", _extends({
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(" + columns + ", minmax(0,1fr))",
      gap: "0 var(--space-12)",
      margin: 0,
      ...style
    }
  }, rest), items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.label,
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: "var(--space-4)",
      padding: "var(--space-3) 0",
      borderBottom: "1px solid " + (light ? "var(--color-border-dark)" : "var(--color-border)")
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-caption)",
      fontWeight: 500,
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: light ? "var(--color-text-dark-secondary)" : "var(--color-text-secondary)"
    }
  }, it.label), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "var(--text-body-lg)",
      letterSpacing: "var(--tracking-heading)",
      color: light ? "var(--color-text-dark)" : "var(--color-text-primary)"
    }
  }, it.value))));
}
Object.assign(__ds_scope, { SpecList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/SpecList.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open,
  title,
  description,
  footer,
  onClose,
  width = 480,
  children,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "presentation",
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 60,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--space-8)",
      background: "rgba(17,19,21,.62)",
      backdropFilter: "var(--blur-scrim)",
      WebkitBackdropFilter: "var(--blur-scrim)",
      animation: "v-fade var(--duration-normal) var(--ease-premium)"
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: "100%",
      background: "var(--color-secondary)",
      border: "1px solid var(--color-border)",
      borderRadius: "var(--radius-card)",
      boxShadow: "var(--shadow-atmos-lg)",
      color: "var(--color-text-primary)",
      padding: "var(--space-8)",
      animation: "v-rise var(--duration-slow) var(--ease-premium)",
      ...style
    }
  }, rest), title && /*#__PURE__*/React.createElement("h2", {
    className: "heading-md",
    style: {
      fontSize: 24,
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-heading)"
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--space-3) 0 0",
      color: "var(--color-text-secondary)",
      fontSize: "var(--text-body-sm)"
    }
  }, description), children && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "var(--space-3)",
      marginTop: "var(--space-8)"
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProgressBar({
  value = 0,
  max = 100,
  tone = "accent",
  label,
  valueLabel,
  height = 4,
  animate = true,
  style,
  ...rest
}) {
  const [w, setW] = React.useState(animate ? 0 : value / max * 100);
  React.useEffect(() => {
    const pct = Math.max(0, Math.min(100, value / max * 100));
    if (!animate) {
      setW(pct);
      return;
    }
    const t = setTimeout(() => setW(pct), 60);
    return () => clearTimeout(t);
  }, [value, max, animate]);
  const fills = {
    accent: "var(--gradient-accent-bar)",
    light: "var(--color-text-primary)",
    muted: "var(--color-surface)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: style
  }, rest), (label || valueLabel) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "var(--space-2)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-caption)",
      fontWeight: 500,
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--color-text-secondary)"
    }
  }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-text-primary)"
    }
  }, valueLabel)), /*#__PURE__*/React.createElement("div", {
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemax": max,
    style: {
      height,
      borderRadius: "var(--radius-pill)",
      background: "rgba(255,255,255,.10)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: w + "%",
      borderRadius: "var(--radius-pill)",
      background: fills[tone] || fills.accent,
      transition: "width var(--duration-cinematic) var(--ease-premium)"
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Toast({
  tone = "neutral",
  title,
  message,
  icon,
  onDismiss,
  style,
  ...rest
}) {
  const bar = {
    neutral: "var(--color-text-secondary)",
    accent: "var(--color-accent)",
    positive: "var(--signal-positive)",
    warning: "var(--signal-warning)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      position: "relative",
      display: "flex",
      gap: "var(--space-3)",
      minWidth: 280,
      maxWidth: 420,
      padding: "var(--space-4)",
      paddingLeft: "var(--space-6)",
      overflow: "hidden",
      borderRadius: "var(--radius-glass)",
      background: "var(--glass-fill-strong)",
      backdropFilter: "var(--blur-glass)",
      WebkitBackdropFilter: "var(--blur-glass)",
      border: "1px solid var(--color-border-strong)",
      boxShadow: "var(--shadow-glass)",
      color: "var(--color-text-primary)",
      animation: "v-rise var(--duration-normal) var(--ease-premium)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      width: 2,
      background: bar[tone] || bar.neutral
    }
  }), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      color: bar[tone]
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-sm)",
      fontWeight: 500
    }
  }, title), message && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-body-sm)",
      color: "var(--color-text-secondary)",
      marginTop: 2
    }
  }, message)), onDismiss && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onDismiss,
    style: {
      background: "none",
      border: 0,
      color: "var(--color-text-secondary)",
      cursor: "pointer",
      fontSize: 16,
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  label,
  placement = "top",
  children,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false)
  }, rest), children, open && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      zIndex: 40,
      whiteSpace: "nowrap",
      padding: "6px var(--space-3)",
      borderRadius: "var(--radius-sm)",
      background: "rgba(17,19,21,.92)",
      border: "1px solid var(--color-border)",
      color: "var(--color-text-primary)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-caption)",
      fontWeight: 500,
      letterSpacing: "var(--tracking-label-tight)",
      textTransform: "uppercase",
      boxShadow: "var(--shadow-atmos)",
      animation: "v-fade var(--duration-fast) var(--ease-standard)",
      ...pos[placement]
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  onChange,
  disabled,
  tone = "dark",
  style,
  ...rest
}) {
  const light = tone === "light";
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: !!checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      flex: "0 0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-sm)",
      background: checked ? "var(--color-accent)" : light ? "#fff" : "var(--surface-inset)",
      border: "1px solid " + (checked ? "var(--color-accent)" : light ? "var(--color-border-dark)" : "var(--color-border-strong)"),
      transition: "background var(--duration-fast) var(--ease-standard)"
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 5,
      borderLeft: "1.6px solid #fff",
      borderBottom: "1.6px solid #fff",
      transform: "rotate(-45deg) translateY(-1px)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-sm)",
      color: light ? "var(--color-text-dark)" : "var(--color-text-primary)"
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  icon,
  tone = "dark",
  value,
  onChange,
  placeholder,
  type = "text",
  disabled,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const light = tone === "light";
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-caption)",
      fontWeight: 500,
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: light ? "var(--color-text-dark-secondary)" : "var(--color-text-secondary)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      height: 44,
      padding: "0 var(--space-4)",
      borderRadius: "var(--radius-md)",
      background: light ? "#fff" : "var(--surface-inset)",
      border: "1px solid " + (error ? "var(--color-accent)" : focus ? "var(--color-border-strong)" : light ? "var(--color-border-dark)" : "var(--color-border)"),
      boxShadow: focus && !error ? "var(--shadow-focus)" : "none",
      opacity: disabled ? 0.45 : 1,
      transition: "border-color var(--duration-normal) var(--ease-standard), box-shadow var(--duration-normal) var(--ease-standard)"
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      color: "var(--color-text-secondary)"
    }
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      background: "transparent",
      border: 0,
      outline: "none",
      color: light ? "var(--color-text-dark)" : "var(--color-text-primary)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-sm)"
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-sm)",
      color: error ? "var(--color-accent)" : "var(--color-text-secondary)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  checked,
  onChange,
  name,
  value,
  disabled,
  tone = "dark",
  style,
  ...rest
}) {
  const light = tone === "light";
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    value: value,
    checked: !!checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      flex: "0 0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
      background: light ? "#fff" : "var(--surface-inset)",
      border: "1px solid " + (checked ? "var(--color-accent)" : light ? "var(--color-border-dark)" : "var(--color-border-strong)")
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "var(--color-accent)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-sm)",
      color: light ? "var(--color-text-dark)" : "var(--color-text-primary)"
    }
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  options = [],
  value,
  onChange,
  tone = "dark",
  disabled,
  style,
  ...rest
}) {
  const light = tone === "light";
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-caption)",
      fontWeight: 500,
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: light ? "var(--color-text-dark-secondary)" : "var(--color-text-secondary)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    value: value,
    onChange: onChange,
    disabled: disabled,
    style: {
      appearance: "none",
      WebkitAppearance: "none",
      width: "100%",
      height: 44,
      padding: "0 var(--space-8) 0 var(--space-4)",
      borderRadius: "var(--radius-md)",
      background: light ? "#fff" : "var(--surface-inset)",
      border: "1px solid " + (light ? "var(--color-border-dark)" : "var(--color-border)"),
      color: light ? "var(--color-text-dark)" : "var(--color-text-primary)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-sm)",
      outline: "none",
      opacity: disabled ? 0.45 : 1,
      cursor: disabled ? "not-allowed" : "pointer"
    }
  }, rest), options.map(o => typeof o === "string" ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: 14,
      top: "50%",
      width: 7,
      height: 7,
      marginTop: -5,
      borderRight: "1.5px solid currentColor",
      borderBottom: "1.5px solid currentColor",
      transform: "rotate(45deg)",
      color: light ? "var(--color-text-dark-secondary)" : "var(--color-text-secondary)",
      pointerEvents: "none"
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked,
  onChange,
  disabled,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: !!checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 22,
      borderRadius: "var(--radius-pill)",
      padding: 2,
      display: "flex",
      alignItems: "center",
      background: checked ? "var(--color-accent)" : "rgba(255,255,255,.12)",
      border: "1px solid " + (checked ? "var(--color-accent)" : "var(--color-border-strong)"),
      transition: "background var(--duration-normal) var(--ease-premium)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: "50%",
      background: "#F5F5F3",
      boxShadow: "0 2px 6px rgba(0,0,0,.3)",
      transform: checked ? "translateX(18px)" : "translateX(0)",
      transition: "transform var(--duration-normal) var(--ease-premium)"
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-sm)",
      color: "var(--color-text-primary)"
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NavBar({
  brand = "VELOCITY",
  items = [],
  activeIndex = 0,
  onSelect,
  actions,
  transparent = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-12)",
      height: 64,
      padding: "0 var(--space-8)",
      background: transparent ? "transparent" : "rgba(17,19,21,.72)",
      backdropFilter: transparent ? "none" : "var(--blur-glass)",
      WebkitBackdropFilter: transparent ? "none" : "var(--blur-glass)",
      borderBottom: "1px solid var(--color-border)",
      color: "var(--color-text-primary)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 15,
      letterSpacing: ".14em"
    }
  }, brand), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-8)",
      flex: 1
    }
  }, items.map((it, i) => {
    const label = typeof it === "string" ? it : it.label;
    const active = i === activeIndex;
    return /*#__PURE__*/React.createElement("button", {
      key: label,
      type: "button",
      onClick: () => onSelect && onSelect(i),
      style: {
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-2)",
        background: "none",
        border: 0,
        padding: "var(--space-2) 0",
        cursor: "pointer",
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-caption)",
        fontWeight: 500,
        letterSpacing: "var(--tracking-label)",
        textTransform: "uppercase",
        color: active ? "var(--color-text-primary)" : "var(--color-text-secondary)",
        transition: "color var(--duration-normal) var(--ease-standard)"
      }
    }, typeof it === "object" && it.icon, label, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 0,
        bottom: 0,
        height: 1,
        width: active ? "100%" : 0,
        background: "var(--color-text-primary)",
        transition: "width var(--duration-slow) var(--ease-premium)"
      }
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)"
    }
  }, actions));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value = 0,
  onChange,
  tone = "dark",
  style,
  ...rest
}) {
  const light = tone === "light";
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "flex",
      gap: "var(--space-6)",
      borderBottom: "1px solid " + (light ? "var(--color-border-dark)" : "var(--color-border)"),
      ...style
    }
  }, rest), items.map((it, i) => {
    const label = typeof it === "string" ? it : it.label;
    const active = i === value;
    return /*#__PURE__*/React.createElement("button", {
      key: label,
      role: "tab",
      "aria-selected": active,
      type: "button",
      onClick: () => onChange && onChange(i),
      style: {
        position: "relative",
        background: "none",
        border: 0,
        padding: "0 0 var(--space-3)",
        cursor: "pointer",
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-caption)",
        fontWeight: 500,
        letterSpacing: "var(--tracking-label)",
        textTransform: "uppercase",
        color: active ? light ? "var(--color-text-dark)" : "var(--color-text-primary)" : light ? "var(--color-text-dark-secondary)" : "var(--color-text-secondary)",
        transition: "color var(--duration-normal) var(--ease-standard)"
      }
    }, label, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 0,
        bottom: -1,
        height: 1.5,
        width: active ? "100%" : 0,
        background: "var(--color-accent)",
        transition: "width var(--duration-slow) var(--ease-premium)"
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/DashboardSection.jsx
try { (() => {
const {
  EyebrowLabel,
  Card,
  Tabs,
  SpecList,
  ProgressBar,
  BarSpark,
  GlassPanel,
  IconButton
} = window.VelocityDesignSystem_e09b97;
function DashboardSection() {
  const [tab, setTab] = React.useState(0);
  const specs = [[{
    label: "Power",
    value: "1100 HP"
  }, {
    label: "Torque",
    value: "1050 lb-ft"
  }, {
    label: "Top speed",
    value: "205 mph"
  }], [{
    label: "Chassis",
    value: "Carbon monocoque"
  }, {
    label: "Suspension",
    value: "Adaptive air"
  }, {
    label: "Weight",
    value: "4,190 lb"
  }], [{
    label: "Drag coeff.",
    value: "0.208"
  }, {
    label: "Downforce",
    value: "412 lb"
  }, {
    label: "Active aero",
    value: "3-stage"
  }]][tab];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      background: "var(--color-background)",
      paddingBottom: 128
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--container-pad-lg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
      gap: 64,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: -96
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "dark",
    padding: "var(--space-6)",
    style: {
      boxShadow: "var(--shadow-atmos-lg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(EyebrowLabel, {
    rule: true
  }, "Performance dashboard"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Expand",
    size: "sm"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "maximize-2",
    size: 14
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: "Settings",
    size: "sm"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sliders-horizontal",
    size: 14
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.2fr 1fr",
      gap: 16,
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(GlassPanel, {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 44,
      lineHeight: 1,
      letterSpacing: "-.03em",
      color: "var(--color-text-primary)"
    }
  }, "142"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--color-text-secondary)"
    }
  }, "mph")), /*#__PURE__*/React.createElement(BarSpark, {
    bars: 22,
    width: 200,
    height: 46,
    accentIndex: -5
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    label: "Battery",
    valueLabel: "82%",
    value: 82
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    label: "Thermal",
    valueLabel: "41%",
    value: 41,
    tone: "light"
  })), /*#__PURE__*/React.createElement(MediaPlate, {
    label: "Cluster render",
    note: "top-down vehicle",
    height: 200,
    radius: "var(--radius-glass)"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 128
    }
  }, /*#__PURE__*/React.createElement(EyebrowLabel, {
    tone: "dark",
    rule: true
  }, "Instrumentation"), /*#__PURE__*/React.createElement("h2", {
    className: "heading-xl",
    style: {
      color: "var(--color-text-dark)",
      marginTop: 16
    }
  }, "DASH BOARD"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      maxWidth: 420,
      color: "var(--color-text-dark-secondary)",
      fontSize: 16,
      lineHeight: 1.55
    }
  }, "Every readout is derived from the same telemetry bus that governs the drive unit. Nothing on screen is decoration."), /*#__PURE__*/React.createElement(Tabs, {
    tone: "light",
    items: ["Powertrain", "Chassis", "Aerodynamics"],
    value: tab,
    onChange: setTab,
    style: {
      marginTop: 32
    }
  }), /*#__PURE__*/React.createElement(SpecList, {
    tone: "light",
    items: specs,
    style: {
      marginTop: 20
    }
  })))));
}
Object.assign(window, {
  DashboardSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/DashboardSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/Hero.jsx
try { (() => {
const {
  NavBar,
  Button,
  MetricCard,
  BarSpark,
  EyebrowLabel,
  Tag
} = window.VelocityDesignSystem_e09b97;
function Hero({
  navIndex,
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      background: "var(--gradient-hero)",
      paddingBottom: 96
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    items: ["Models", "Performance", "Technology", "Ownership"],
    activeIndex: navIndex,
    onSelect: onNav,
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "quiet"
    }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost"
    }, "Reserve"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "64px var(--container-pad-lg) 0",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "display-xl",
    style: {
      animation: "v-rise var(--duration-cinematic) var(--ease-premium) both",
      animationDelay: "120ms",
      color: "var(--color-text-primary)"
    }
  }, "VELOCITY.", /*#__PURE__*/React.createElement("br", null), "REFINED."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 24,
      maxWidth: 340,
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      lineHeight: 1.9,
      color: "var(--color-text-secondary)",
      animation: "v-rise var(--duration-cinematic) var(--ease-premium) both",
      animationDelay: "320ms"
    }
  }, "Experience the future of", /*#__PURE__*/React.createElement("br", null), "performance and luxury."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1.45fr) minmax(0,.55fr)",
      gap: 32,
      marginTop: 32,
      alignItems: "end"
    }
  }, /*#__PURE__*/React.createElement(MediaPlate, {
    label: "Hero vehicle",
    note: "3/4 front, studio floor reflection",
    height: 420,
    style: {
      animation: "v-settle var(--duration-cinematic) var(--ease-premium) both",
      animationDelay: "220ms"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      animation: "v-rise var(--duration-cinematic) var(--ease-premium) both",
      animationDelay: "560ms"
    }
  }, /*#__PURE__*/React.createElement(MetricCard, {
    label: "0-60 mph",
    value: 2.1,
    decimals: 1,
    unit: "s",
    countUp: true,
    chart: /*#__PURE__*/React.createElement(BarSpark, {
      accentIndex: -4,
      width: 104,
      height: 44
    })
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Range",
    value: "520+",
    unit: " miles",
    chart: /*#__PURE__*/React.createElement(Icon, {
      name: "battery-charging",
      size: 18
    })
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Power",
    value: 1100,
    unit: " HP",
    countUp: true,
    chart: /*#__PURE__*/React.createElement(Icon, {
      name: "wind",
      size: 18
    })
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "glass",
    size: "lg",
    full: true,
    iconAfter: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right"
    })
  }, "Explore specifications"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 32,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(EyebrowLabel, {
    rule: true
  }, "Model year 2027"), /*#__PURE__*/React.createElement(Tag, {
    tone: "outline"
  }, "Track pack available"))));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/Icon.jsx
try { (() => {
const LUCIDE = "https://unpkg.com/lucide-static@0.469.0/icons/";
function Icon({
  name,
  size = 16,
  tone = "light",
  style
}) {
  return /*#__PURE__*/React.createElement("img", {
    src: LUCIDE + name + ".svg",
    alt: "",
    width: size,
    height: size,
    style: {
      display: "block",
      filter: tone === "light" ? "invert(1)" : tone === "accent" ? "invert(29%) sepia(84%) saturate(3500%) hue-rotate(343deg) brightness(94%) contrast(92%)" : "none",
      opacity: tone === "light" ? .9 : 1,
      ...style
    }
  });
}
function MediaPlate({
  label = "Photography",
  note = "supply asset",
  height = 320,
  radius = "var(--radius-media)",
  style,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height,
      borderRadius: radius,
      overflow: "hidden",
      background: "var(--gradient-metal)",
      border: "1px solid var(--color-border)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(120% 80% at 50% 20%, rgba(255,255,255,.14), transparent 60%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--overlay-bottom)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      bottom: 14,
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontFamily: "var(--font-body)",
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "rgba(245,245,243,.55)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 1,
      background: "currentColor"
    }
  }), label, " \u2014 ", note), children);
}
Object.assign(window, {
  Icon,
  MediaPlate,
  LUCIDE
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/Icon.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/InteriorSection.jsx
try { (() => {
const {
  EyebrowLabel,
  Tag,
  Button
} = window.VelocityDesignSystem_e09b97;
function InteriorSection() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--color-background)",
      paddingBottom: 128
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--container-pad-lg)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement(MediaPlate, {
    label: "Interior",
    note: "driver-side cockpit, low key",
    height: 460
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 40,
      bottom: -40,
      width: 380
    }
  }, /*#__PURE__*/React.createElement(MediaPlate, {
    label: "Central touchscreen",
    note: "16:9 UI shot",
    height: 220,
    radius: "var(--radius-lg)",
    style: {
      boxShadow: "var(--shadow-atmos-lg)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: -8,
      top: 40,
      transform: "rotate(90deg)",
      transformOrigin: "right top"
    }
  }, /*#__PURE__*/React.createElement(EyebrowLabel, {
    tone: "dark"
  }, "Central touchscreen")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginTop: 120,
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EyebrowLabel, {
    tone: "dark",
    rule: true
  }, "Cabin"), /*#__PURE__*/React.createElement("h2", {
    className: "heading-lg",
    style: {
      color: "var(--color-text-dark)",
      marginTop: 14
    }
  }, "Machined, not moulded.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "dark"
  }, "Anodised aluminium"), /*#__PURE__*/React.createElement(Tag, {
    tone: "dark"
  }, "Recycled wool"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    style: {
      color: "var(--color-text-dark)",
      borderColor: "var(--color-border-dark)"
    },
    iconAfter: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16,
      tone: "dark"
    })
  }, "Configure")))));
}
Object.assign(window, {
  InteriorSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/InteriorSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/ReserveSection.jsx
try { (() => {
const {
  EyebrowLabel,
  Card,
  Input,
  Select,
  Checkbox,
  Radio,
  Button,
  Dialog,
  Toast,
  SpecList
} = window.VelocityDesignSystem_e09b97;
function ReserveSection() {
  const [trim, setTrim] = React.useState("performance");
  const [email, setEmail] = React.useState("");
  const [terms, setTerms] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [toast, setToast] = React.useState(false);
  const price = {
    touring: "$142,000",
    performance: "$168,500",
    track: "$194,000"
  }[trim];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--gradient-hero)",
      padding: "128px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--container-pad-lg)",
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) 420px",
      gap: 64,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EyebrowLabel, {
    rule: true
  }, "Reserve"), /*#__PURE__*/React.createElement("h2", {
    className: "heading-xl",
    style: {
      color: "var(--color-text-primary)",
      marginTop: 16
    }
  }, "Build yours."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      maxWidth: 440,
      color: "var(--color-text-secondary)"
    }
  }, "Reservations are refundable for 14 days. Production allocation is confirmed by a specialist."), /*#__PURE__*/React.createElement(SpecList, {
    style: {
      marginTop: 32,
      maxWidth: 440
    },
    items: [{
      label: "Trim",
      value: trim[0].toUpperCase() + trim.slice(1)
    }, {
      label: "Estimated price",
      value: price
    }, {
      label: "Delivery",
      value: "Q3 2027"
    }]
  })), /*#__PURE__*/React.createElement(Card, {
    tone: "dark",
    padding: "var(--space-8)"
  }, /*#__PURE__*/React.createElement(EyebrowLabel, null, "Configuration"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      marginTop: 20
    }
  }, ["touring", "performance", "track"].map(t => /*#__PURE__*/React.createElement(Radio, {
    key: t,
    name: "trim",
    label: t[0].toUpperCase() + t.slice(1),
    checked: trim === t,
    onChange: () => setTrim(t)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--color-border)",
      margin: "24px 0"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Delivery region",
    options: ["North America", "Europe", "Asia-Pacific"]
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: "you@domain.com",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 15
    })
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "I accept the reservation terms.",
    checked: terms,
    onChange: () => setTerms(!terms)
  }), /*#__PURE__*/React.createElement(Button, {
    full: true,
    size: "lg",
    disabled: !terms,
    onClick: () => setOpen(true)
  }, "Reserve \u2014 ", price)))), /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    title: "Confirm reservation",
    description: "Trim: " + trim + " · " + price + ". A specialist confirms allocation within 24 hours.",
    onClose: () => setOpen(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setOpen(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => {
        setOpen(false);
        setToast(true);
        setTimeout(() => setToast(false), 4000);
      }
    }, "Confirm"))
  }), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      right: 24,
      bottom: 24,
      zIndex: 80
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "positive",
    title: "Reservation received",
    message: "Reference VX-2291",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 16
    }),
    onDismiss: () => setToast(false)
  })));
}
Object.assign(window, {
  ReserveSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/ReserveSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/SiteFooter.jsx
try { (() => {
const {
  EyebrowLabel
} = window.VelocityDesignSystem_e09b97;
function SiteFooter() {
  const cols = [{
    title: "Models",
    links: ["Touring", "Performance", "Track"]
  }, {
    title: "Ownership",
    links: ["Charging", "Service", "Warranty"]
  }, {
    title: "Company",
    links: ["About", "Careers", "Press"]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--color-primary)",
      borderTop: "1px solid var(--color-border)",
      padding: "64px 0 48px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--container-pad-lg)",
      display: "grid",
      gridTemplateColumns: "1.4fr repeat(3, 1fr)",
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 15,
      letterSpacing: ".14em",
      color: "var(--color-text-primary)"
    }
  }, "VELOCITY"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      fontSize: 14,
      color: "var(--color-text-secondary)",
      maxWidth: 260
    }
  }, "Performance engineering, without the theatre.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title
  }, /*#__PURE__*/React.createElement(EyebrowLabel, null, c.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      marginTop: 14
    }
  }, c.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontSize: 14,
      color: "var(--color-text-secondary)"
    }
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "48px auto 0",
      padding: "0 var(--container-pad-lg)",
      display: "flex",
      justifyContent: "space-between",
      borderTop: "1px solid var(--color-border)",
      paddingTop: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "rgba(245,245,243,.4)"
    }
  }, "\xA9 2027 Velocity Motors"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "rgba(245,245,243,.4)"
    }
  }, "Legal \xB7 Privacy")));
}
Object.assign(window, {
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/performance_app/AppIcon.jsx
try { (() => {
const LUCIDE_APP = "https://unpkg.com/lucide-static@0.469.0/icons/";
function AppIcon({
  name,
  size = 18,
  accent,
  style
}) {
  return /*#__PURE__*/React.createElement("img", {
    src: LUCIDE_APP + name + ".svg",
    alt: "",
    width: size,
    height: size,
    style: {
      display: "block",
      filter: accent ? "invert(29%) sepia(84%) saturate(3500%) hue-rotate(343deg) brightness(94%) contrast(92%)" : "invert(1)",
      opacity: accent ? 1 : .9,
      ...style
    }
  });
}
function AppPlate({
  label,
  note = "supply asset",
  height = 200,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height,
      borderRadius: "var(--radius-glass)",
      overflow: "hidden",
      background: "var(--gradient-metal)",
      border: "1px solid var(--color-border)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(110% 70% at 50% 15%, rgba(255,255,255,.12), transparent 60%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 14,
      bottom: 12,
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "rgba(245,245,243,.5)"
    }
  }, label, " \u2014 ", note));
}
Object.assign(window, {
  AppIcon,
  AppPlate
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/performance_app/AppIcon.jsx", error: String((e && e.message) || e) }); }

// ui_kits/performance_app/AppShell.jsx
try { (() => {
const {
  EyebrowLabel,
  IconButton,
  Badge,
  Tooltip,
  Toast,
  Button
} = window.VelocityDesignSystem_e09b97;
const NAV = [{
  key: "drive",
  icon: "gauge",
  label: "Drive"
}, {
  key: "charge",
  icon: "battery-charging",
  label: "Charging"
}, {
  key: "route",
  icon: "map",
  label: "Route"
}];
function AppShell() {
  const [view, setView] = React.useState("drive");
  const [toast, setToast] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      minHeight: "100vh",
      background: "var(--gradient-hero)"
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 72,
      flex: "0 0 72px",
      borderRight: "1px solid var(--color-border)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px 0",
      gap: 20,
      background: "rgba(17,19,21,.6)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: ".12em",
      color: "var(--color-text-primary)"
    }
  }, "VX"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      marginTop: 12
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement(Tooltip, {
    key: n.key,
    label: n.label,
    placement: "right"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: n.label,
    size: "lg",
    variant: view === n.key ? "solid" : "bare",
    active: view === n.key,
    onClick: () => setView(n.key)
  }, /*#__PURE__*/React.createElement(AppIcon, {
    name: n.icon,
    accent: view === n.key
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    count: 2
  }), /*#__PURE__*/React.createElement(IconButton, {
    label: "Settings",
    size: "lg",
    variant: "bare"
  }, /*#__PURE__*/React.createElement(AppIcon, {
    name: "settings"
  })))), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 64,
      padding: "0 var(--space-8)",
      borderBottom: "1px solid var(--color-border)"
    }
  }, /*#__PURE__*/React.createElement(EyebrowLabel, null, "Velocity \xB7 VX Performance \xB7 VIN 7291"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(EyebrowLabel, {
    tone: "bright"
  }, "82%"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    icon: /*#__PURE__*/React.createElement(AppIcon, {
      name: "lock",
      size: 14
    })
  }, "Locked"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-8)",
      flex: 1
    }
  }, view === "drive" && /*#__PURE__*/React.createElement(DriveScreen, null), view === "charge" && /*#__PURE__*/React.createElement(ChargeScreen, {
    onNotify: () => {
      setToast(true);
      setTimeout(() => setToast(false), 4000);
    }
  }), view === "route" && /*#__PURE__*/React.createElement(RouteScreen, null))), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      right: 24,
      bottom: 24,
      zIndex: 80
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "warning",
    title: "Charging stopped",
    message: "Session logged \xB7 18 min \xB7 216 mi added",
    icon: /*#__PURE__*/React.createElement(AppIcon, {
      name: "plug",
      size: 16
    }),
    onDismiss: () => setToast(false)
  })));
}
Object.assign(window, {
  AppShell
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/performance_app/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/performance_app/ChargeScreen.jsx
try { (() => {
const {
  EyebrowLabel,
  Card,
  ProgressBar,
  MetricCard,
  SpecList,
  Button,
  Select,
  Switch,
  Tag
} = window.VelocityDesignSystem_e09b97;
function ChargeScreen({
  onNotify
}) {
  const [limit, setLimit] = React.useState("80%");
  const [precondition, setPrecondition] = React.useState(true);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EyebrowLabel, {
    rule: true
  }, "Energy"), /*#__PURE__*/React.createElement("h1", {
    className: "heading-lg",
    style: {
      color: "var(--color-text-primary)",
      marginTop: 10
    }
  }, "Charging")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) 320px",
      gap: 20,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "dark",
    padding: "var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(EyebrowLabel, null, "State of charge"), /*#__PURE__*/React.createElement(Tag, {
    tone: "accent",
    dot: true
  }, "250 kW")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 10,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 96,
      lineHeight: .88,
      letterSpacing: "-.04em",
      color: "var(--color-text-primary)"
    }
  }, "82"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 32,
      color: "var(--color-text-secondary)"
    }
  }, "%")), /*#__PURE__*/React.createElement(ProgressBar, {
    value: 82,
    style: {
      marginTop: 24
    },
    height: 6
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 16,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(MetricCard, {
    surface: "inset",
    label: "Added",
    value: 216,
    unit: " mi",
    countUp: true
  }), /*#__PURE__*/React.createElement(MetricCard, {
    surface: "inset",
    label: "To 80%",
    value: "0",
    unit: " min"
  }), /*#__PURE__*/React.createElement(MetricCard, {
    surface: "inset",
    label: "Session",
    value: 18,
    unit: " min",
    countUp: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "dark"
  }, /*#__PURE__*/React.createElement(EyebrowLabel, null, "Charge settings"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Charge limit",
    options: ["70%", "80%", "90%", "100%"],
    value: limit,
    onChange: e => setLimit(e.target.value)
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Precondition battery",
    checked: precondition,
    onChange: () => setPrecondition(!precondition)
  }), /*#__PURE__*/React.createElement(Button, {
    full: true,
    onClick: onNotify
  }, "Stop charging"))), /*#__PURE__*/React.createElement(Card, {
    tone: "dark"
  }, /*#__PURE__*/React.createElement(EyebrowLabel, null, "Nearest network"), /*#__PURE__*/React.createElement(SpecList, {
    style: {
      marginTop: 12
    },
    items: [{
      label: "Ridge Plaza",
      value: "2 mi"
    }, {
      label: "Harbour Yard",
      value: "6 mi"
    }, {
      label: "Vale Interchange",
      value: "11 mi"
    }]
  })))));
}
Object.assign(window, {
  ChargeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/performance_app/ChargeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/performance_app/DriveScreen.jsx
try { (() => {
const {
  EyebrowLabel,
  MetricCard,
  BarSpark,
  GlassPanel,
  ProgressBar,
  Tag,
  SpecList,
  Switch,
  Tabs
} = window.VelocityDesignSystem_e09b97;
function DriveScreen() {
  const [mode, setMode] = React.useState(1);
  const [launch, setLaunch] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EyebrowLabel, {
    rule: true
  }, "Live telemetry"), /*#__PURE__*/React.createElement("h1", {
    className: "heading-lg",
    style: {
      color: "var(--color-text-primary)",
      marginTop: 10
    }
  }, "Drive")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "accent",
    dot: true
  }, "Recording"), /*#__PURE__*/React.createElement(Tag, {
    tone: "outline"
  }, "Lap 4"))), /*#__PURE__*/React.createElement(Tabs, {
    items: ["Range", "Sport", "Track"],
    value: mode,
    onChange: setMode
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1.3fr) minmax(0,1fr)",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(GlassPanel, {
    padding: "var(--space-6)",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EyebrowLabel, null, "Speed"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 8,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 72,
      lineHeight: .9,
      letterSpacing: "-.04em",
      color: "var(--color-text-primary)"
    }
  }, "142"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--color-text-secondary)"
    }
  }, "mph"))), /*#__PURE__*/React.createElement(BarSpark, {
    bars: 26,
    width: 260,
    height: 80,
    accentIndex: -6
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    label: "Throttle",
    valueLabel: "86%",
    value: 86
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    label: "Regen",
    valueLabel: "12%",
    value: 12,
    tone: "light"
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    label: "Battery temp",
    valueLabel: "41\xB0C",
    value: 41,
    tone: "muted"
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    label: "Tyre load FL",
    valueLabel: "63%",
    value: 63,
    tone: "light"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(MetricCard, {
    label: "0-60 mph",
    value: 2.1,
    decimals: 1,
    unit: "s",
    countUp: true,
    surface: "solid",
    chart: /*#__PURE__*/React.createElement(BarSpark, {
      accentIndex: -3,
      width: 72,
      height: 36
    })
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Power out",
    value: 982,
    unit: " HP",
    countUp: true,
    surface: "inset"
  }), /*#__PURE__*/React.createElement(AppPlate, {
    label: "Vehicle top-down",
    height: 150
  }), /*#__PURE__*/React.createElement(GlassPanel, null, /*#__PURE__*/React.createElement(Switch, {
    label: "Launch control armed",
    checked: launch,
    onChange: () => setLaunch(!launch)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EyebrowLabel, null, "Session"), /*#__PURE__*/React.createElement(SpecList, {
    style: {
      marginTop: 12
    },
    items: [{
      label: "Best lap",
      value: "1:42.8"
    }, {
      label: "Distance",
      value: "38.2 mi"
    }, {
      label: "Energy",
      value: "312 Wh/mi"
    }]
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EyebrowLabel, null, "Conditions"), /*#__PURE__*/React.createElement(SpecList, {
    style: {
      marginTop: 12
    },
    items: [{
      label: "Ambient",
      value: "19°C"
    }, {
      label: "Surface",
      value: "Dry"
    }, {
      label: "Grip index",
      value: "0.94"
    }]
  }))));
}
Object.assign(window, {
  DriveScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/performance_app/DriveScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/performance_app/RouteScreen.jsx
try { (() => {
const {
  EyebrowLabel,
  Card,
  Input,
  SpecList,
  Button,
  Tag,
  ProgressBar
} = window.VelocityDesignSystem_e09b97;
function RouteScreen() {
  const [q, setQ] = React.useState("Vale Interchange");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EyebrowLabel, {
    rule: true
  }, "Navigation"), /*#__PURE__*/React.createElement("h1", {
    className: "heading-lg",
    style: {
      color: "var(--color-text-primary)",
      marginTop: 10
    }
  }, "Route")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "340px minmax(0,1fr)",
      gap: 20,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "dark"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Destination",
    value: q,
    onChange: e => setQ(e.target.value),
    icon: /*#__PURE__*/React.createElement(AppIcon, {
      name: "search",
      size: 15
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(EyebrowLabel, null, "Plan"), /*#__PURE__*/React.createElement(SpecList, {
    style: {
      marginTop: 12
    },
    items: [{
      label: "Distance",
      value: "184 mi"
    }, {
      label: "Arrival SOC",
      value: "34%"
    }, {
      label: "Stops",
      value: "1"
    }]
  })), /*#__PURE__*/React.createElement(Button, {
    full: true,
    style: {
      marginTop: 20
    },
    iconAfter: /*#__PURE__*/React.createElement(AppIcon, {
      name: "corner-up-right",
      size: 16
    })
  }, "Start route")), /*#__PURE__*/React.createElement(Card, {
    tone: "dark"
  }, /*#__PURE__*/React.createElement(EyebrowLabel, null, "Charge stop"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 20,
      color: "var(--color-text-primary)"
    }
  }, "Ridge Plaza"), /*#__PURE__*/React.createElement(Tag, {
    tone: "neutral"
  }, "12 min")), /*#__PURE__*/React.createElement(ProgressBar, {
    style: {
      marginTop: 16
    },
    label: "Arrive / depart",
    valueLabel: "18% \u2192 72%",
    value: 72
  }))), /*#__PURE__*/React.createElement(AppPlate, {
    label: "Map view",
    note: "supply map tiles or use the maps skill",
    height: 520
  })));
}
Object.assign(window, {
  RouteScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/performance_app/RouteScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.EyebrowLabel = __ds_scope.EyebrowLabel;

__ds_ns.GlassPanel = __ds_scope.GlassPanel;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.BarSpark = __ds_scope.BarSpark;

__ds_ns.MetricCard = __ds_scope.MetricCard;

__ds_ns.SpecList = __ds_scope.SpecList;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
