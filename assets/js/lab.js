(() => {
  "use strict";
  document.documentElement.classList.add("js");
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".lab-nav");
  const closeMenu = () => {
    toggle?.setAttribute("aria-expanded", "false");
    nav?.classList.remove("is-open");
  };
  toggle?.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
  });
  nav?.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      toggle?.getAttribute("aria-expanded") === "true"
    ) {
      closeMenu();
      toggle.focus();
    }
  });
  window.matchMedia("(min-width: 801px)").addEventListener("change", closeMenu);

  const search = document.querySelector("#publication-search");
  search?.addEventListener("input", () => {
    const query = search.value.trim().toLocaleLowerCase();
    const entries = [...document.querySelectorAll(".publication-entry")];
    let count = 0;
    entries.forEach((entry) => {
      entry.hidden = !entry.textContent.toLocaleLowerCase().includes(query);
      if (!entry.hidden) count++;
    });
    document.querySelector(".publication-count").textContent =
      `${count} ${count === 1 ? "publication" : "publications"}`;
    document.querySelector(".no-results").hidden = count > 0;
  });
})();
