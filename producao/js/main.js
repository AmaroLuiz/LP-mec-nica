(() => {
  "use strict";

  // TODO: substituir pelo número real de WhatsApp da oficina (formato 55DDDNUMERO, só dígitos)
  const WA_NUMBER = "5511999999999";
  const WA_MSG = "Olá! Gostaria de agendar um serviço para meu veículo. Como posso verificar os horários disponíveis?";

  function waLink(message) {
    return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(message);
  }

  // Aplica o link padrão do WhatsApp a todo botão/âncora marcado com .wa-cta
  document.querySelectorAll(".wa-cta").forEach((el) => {
    el.setAttribute("href", waLink(WA_MSG));
  });

  // ---------- Header: muda de aparência ao rolar ----------
  const topbar = document.getElementById("topbar");
  function onScroll() {
    topbar.classList.toggle("is-scrolled", window.scrollY > 40);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // ---------- Menu mobile ----------
  const navburger = document.getElementById("navburger");
  const mobilePanel = document.getElementById("mobilePanel");
  navburger.addEventListener("click", () => {
    const open = mobilePanel.classList.toggle("is-open");
    navburger.setAttribute("aria-expanded", String(open));
  });
  mobilePanel.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      mobilePanel.classList.remove("is-open");
      navburger.setAttribute("aria-expanded", "false");
    });
  });

  // ---------- FAQ accordion (um aberto por vez) ----------
  const faqItems = Array.from(document.querySelectorAll(".faq-item"));
  faqItems.forEach((item) => {
    const btn = item.querySelector(".faq-q");
    btn.addEventListener("click", () => {
      const wasOpen = item.classList.contains("is-open");
      faqItems.forEach((i) => i.classList.remove("is-open"));
      if (!wasOpen) item.classList.add("is-open");
    });
  });

  // ---------- Scroll reveal (substitui GSAP/ScrollTrigger) ----------
  const revealEls = document.querySelectorAll(".reveal");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 }
    );
    revealEls.forEach((el) => io.observe(el));
  }

  // ---------- Contador animado das métricas do hero ----------
  const counters = document.querySelectorAll("[data-count-to]");
  function animateCount(el) {
    const target = parseFloat(el.getAttribute("data-count-to"));
    if (reduceMotion) { el.textContent = target; return; }
    const duration = 1200;
    let start = null;
    function step(ts) {
      if (start === null) start = ts;
      const p = Math.min(1, (ts - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if ("IntersectionObserver" in window && counters.length) {
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            cio.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach((el) => cio.observe(el));
  } else {
    counters.forEach(animateCount);
  }

  // ---------- Formulário de orçamento ----------
  const fNome = document.getElementById("f-nome");
  const fTel = document.getElementById("f-tel");
  const fVeiculo = document.getElementById("f-veiculo");
  const fTipo = document.getElementById("f-tipo");
  const fServico = document.getElementById("f-servico");
  const fObs = document.getElementById("f-obs");
  const progressFill = document.getElementById("formProgressFill");
  const progressLabel = document.getElementById("formProgressLabel");
  const formHint = document.getElementById("formHint");
  const formSubmit = document.getElementById("formSubmit");

  function updateProgress() {
    const filled = [fNome, fTel, fVeiculo].filter((i) => i.value.trim()).length;
    progressFill.style.width = (filled / 3) * 100 + "%";
    progressLabel.textContent = filled + "/3";
  }
  [fNome, fTel, fVeiculo].forEach((input) => input.addEventListener("input", updateProgress));
  updateProgress();

  formSubmit.addEventListener("click", () => {
    const nome = fNome.value.trim() || "—";
    const tel = fTel.value.trim() || "—";
    const veiculo = fVeiculo.value.trim() || "—";
    const tipo = fTipo.value;
    const servico = fServico.value;
    const obs = fObs.value.trim();

    let msg = WA_MSG;
    msg += "\n\nNome: " + nome;
    msg += "\nTelefone: " + tel;
    msg += "\nVeículo: " + veiculo + " (" + tipo + ")";
    msg += "\nServiço: " + servico;
    if (obs) msg += "\nObs: " + obs;

    formHint.textContent = "Solicitação aberta no WhatsApp · dados anexados";
    window.open(waLink(msg), "_blank", "noopener");
  });
})();
