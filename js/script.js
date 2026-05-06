document.querySelectorAll(".f-acc-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const panel = document.getElementById(btn.dataset.target);
    const isOpen = panel.classList.contains("open");

    document
      .querySelectorAll(".f-acc-panel")
      .forEach((p) => p.classList.remove("open"));

    document
      .querySelectorAll(".f-acc-btn")
      .forEach((b) => b.setAttribute("aria-expanded", "false"));

    if (!isOpen) {
      panel.classList.add("open");
      btn.setAttribute("aria-expanded", "true");
    }
  });
});

function closeMobileAccordion() {
  document.querySelectorAll(".f-acc-panel").forEach((p) => {
    p.classList.remove("open");
  });

  document.querySelectorAll(".f-acc-btn").forEach((b) => {
    b.setAttribute("aria-expanded", "false");
  });
}

function handleFooterResize() {
  if (window.innerWidth >= 768) {
    closeMobileAccordion();
  }
}

window.addEventListener("resize", handleFooterResize);
handleFooterResize();
