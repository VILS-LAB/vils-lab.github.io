(() => {
  "use strict";
  const diagram = document.querySelector("[data-neural-flow]");
  if (!diagram) return;
  const toggle = diagram.querySelector(".neural-motion-toggle");
  const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  let reduced = preference.matches;
  const setRunning = (running) => {
    running = running && !reduced;
    diagram.dataset.running = String(running);
    toggle.disabled = reduced;
    toggle.setAttribute("aria-pressed", String(!running));
    toggle.setAttribute(
      "aria-label",
      reduced
        ? "Animation disabled by your reduced-motion preference"
        : `${running ? "Pause" : "Play"} neural signal animation`,
    );
    toggle.innerHTML = reduced
      ? "Reduced motion"
      : `${running ? "Pause motion" : "Play motion"} <span aria-hidden="true">${running ? "Ⅱ" : "▷"}</span>`;
  };
  toggle.addEventListener("click", () =>
    setRunning(diagram.dataset.running !== "true"),
  );
  preference.addEventListener("change", (event) => {
    reduced = event.matches;
    setRunning(!reduced);
  });
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(
      (entries) => {
        diagram.dataset.inView = String(entries[0].isIntersecting);
      },
      { threshold: 0.05 },
    ).observe(diagram);
  }
  const updateVisibility = () => {
    diagram.dataset.pageVisible = String(!document.hidden);
  };
  document.addEventListener("visibilitychange", updateVisibility);
  updateVisibility();
  setRunning(!reduced);
})();
