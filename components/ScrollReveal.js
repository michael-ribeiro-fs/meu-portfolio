/**
 * ScrollReveal.js
 * Anima elementos com a classe .reveal ao entrarem no viewport.
 * Utiliza IntersectionObserver para performance otimizada.
 * Cada elemento é observado apenas uma vez (unobserve após revelar).
 */
export class ScrollReveal {
  /**
   * @param {string} selector  - Seletor dos elementos a animar
   * @param {Object} options   - Opções do IntersectionObserver
   */
  constructor(selector = ".reveal", options = {}) {
    this.selector = selector;
    this.options = {
      root: null,
      rootMargin: "0px 0px -80px 0px",
      threshold: 0.1,
      ...options,
    };

    this.elements = document.querySelectorAll(this.selector);
    this.observer = null;

    this._init();
  }

  /** Cria o observer e começa a observar cada elemento */
  _init() {
    if (!("IntersectionObserver" in window)) {
      this._showAll();
      return;
    }

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal--visible");
          this.observer.unobserve(entry.target);
        }
      });
    }, this.options);

    this.elements.forEach((el) => this.observer.observe(el));
  }

  /** Fallback: mostra tudo imediatamente se não houver suporte a IO */
  _showAll() {
    this.elements.forEach((el) => el.classList.add("reveal--visible"));
  }

  /** Desconecta o observer e limpa a referência */
  destroy() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }
}
