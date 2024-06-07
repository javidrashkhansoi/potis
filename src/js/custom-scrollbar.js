import SimpleBar from "simplebar";

const { body } = document;
/** @type {NodeListOf<HTMLElement>} */
const customScrolledElements = document.querySelectorAll("[data-scroll]");
/** @param {HTMLElement} element */
const calcElementHeight = (element) => {
  element.style.removeProperty("--custom-scroll-height");

  const elementTop = element.getBoundingClientRect().top;
  const gap = scrollY + elementTop + 51;

  element.style.setProperty("--custom-scroll-height", `${gap}px`);
};

setTimeout(() => {
  customScrolledElements.forEach(element => {
    calcElementHeight(element);

    const simplebar = new SimpleBar(element);
    /** @type {HTMLElement} */
    const simplebarPlaceholder = element.querySelector(".simplebar-placeholder");

    const bodyResizeObserver = new ResizeObserver(entries => {
      entries.forEach(entry => {
        calcElementHeight(element);
        simplebarPlaceholder.style.width = "";
        simplebarPlaceholder.style.height = "";
      });
    });

    bodyResizeObserver.observe(body);
  });
});
