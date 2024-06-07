const { documentElement, body } = document;
const htmlClassList = documentElement.classList;
const htmlStyle = documentElement.style;
const cssProperty = "--scrollbar-width";
const fixedElements = document.querySelectorAll("[data-fixed]");

fixedElements?.forEach(fixedElement => {
  fixedElement.style.paddingRight = `var(${cssProperty})`;
});

body.style.paddingRight = `var(${cssProperty})`;

class Scrolling {
  static #addingClass = "scroll-lock";

  /**
   * @description
   * Скрывает скроллбар.
   *
   * @returns {void}
   */
  static lock() {
    htmlStyle.setProperty(`${cssProperty}`, `${this.#scrollbarWidth}px`);
    htmlClassList.add(this.#addingClass);
  }

  /**
   * @description
   * Показывет скроллбар.
   *
   * @returns {void}
   */
  static unlock() {
    htmlStyle.removeProperty(`${cssProperty}`);
    htmlClassList.remove(this.#addingClass);
  }

  static get #scrollbarWidth() {
    return innerWidth - body.offsetWidth;
  }
}

export { Scrolling };
