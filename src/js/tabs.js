/** @type {NodeListOf<HTMLElement>} */
const tabBlocks = document.querySelectorAll("[data-tabs]");

tabBlocks.forEach(block => {
  const tabs = block.dataset.tabs;
  /** @type {NodeListOf<HTMLButtonElement>} */
  const buttons = block.querySelectorAll("[data-tab]");
  /** @type {NodeListOf<HTMLElement>} */
  const panels = block.querySelectorAll(`[data-panels=${tabs}] [data-panel]`);

  panels.forEach(panel => {
    const tab = panel.dataset.panel;
    const button = [...buttons].find( /** @param {HTMLButtonElement} button */ button => button.dataset.tab === tab);

    button.addEventListener("click", () => {
      buttons.forEach(button => button.classList.toggle("active", button.dataset.tab === tab));
      panels.forEach(panel => panel.toggleAttribute("hidden", panel.dataset.panel !== tab));
    });
  });
});
