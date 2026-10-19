(() => {
  "use strict";
  const demos = [...document.querySelectorAll("[data-project-demo]")];
  if (!demos.length) return;
  const motionPreference = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  );
  demos.forEach((demo) => {
    let reducedMotion = motionPreference.matches;
    const pause = demo.querySelector(".demo-pause");
    const field = demo.querySelector(
      ".demo-topline > span:nth-child(2)",
    ).textContent;
    const setRunning = (running) => {
      running = running && !reducedMotion;
      demo.dataset.running = String(running);
      pause.disabled = reducedMotion;
      pause.setAttribute("aria-pressed", String(!running));
      if (reducedMotion) {
        pause.setAttribute(
          "aria-label",
          "Animation disabled by your reduced-motion preference",
        );
        pause.textContent = "Reduced motion";
        return;
      }
      pause.setAttribute(
        "aria-label",
        `${running ? "Pause" : "Play"} ${field} animation`,
      );
      pause.innerHTML = `${running ? "Pause motion" : "Play motion"} <span aria-hidden="true">${running ? "Ⅱ" : "▷"}</span>`;
    };
    setRunning(!motionPreference.matches);
    pause.addEventListener("click", () =>
      setRunning(demo.dataset.running !== "true"),
    );
    motionPreference.addEventListener("change", (event) => {
      reducedMotion = event.matches;
      setRunning(!reducedMotion);
    });

    const enhancement = demo.querySelector("[data-enhancement]");
    enhancement?.addEventListener("input", () => {
      const strength = Number(enhancement.value);
      demo.style.setProperty("--enhancement", String(strength / 100));
      demo.querySelector("output").value = `${strength}%`;
    });

    demo.querySelectorAll("[data-learning-phase]").forEach((button) => {
      button.addEventListener("click", () => {
        demo.dataset.phase = button.dataset.learningPhase;
        demo
          .querySelectorAll("[data-learning-phase]")
          .forEach((item) =>
            item.setAttribute("aria-pressed", String(item === button)),
          );
        demo.querySelector("[data-phase-note]").textContent =
          demo.dataset.phase === "offline"
            ? "Learn a starting policy from stored experience."
            : "Adapt the policy through interaction and new feedback.";
      });
    });
    demo.querySelectorAll("[data-analysis-signal]").forEach((button) => {
      button.addEventListener("click", () => {
        demo.dataset.signal = button.dataset.analysisSignal;
        demo
          .querySelectorAll("[data-analysis-signal]")
          .forEach((item) =>
            item.setAttribute("aria-pressed", String(item === button)),
          );
      });
    });
  });
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.dataset.inView = String(entry.isIntersecting);
        });
      },
      { threshold: 0.05 },
    );
    demos.forEach((demo) => observer.observe(demo));
  }
  const updateVisibility = () => {
    demos.forEach(
      (demo) => (demo.dataset.pageVisible = String(!document.hidden)),
    );
  };
  document.addEventListener("visibilitychange", updateVisibility);
  updateVisibility();
})();
