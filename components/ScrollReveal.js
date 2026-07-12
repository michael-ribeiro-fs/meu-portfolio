export class ScrollReveal {
  /**
   * @param {string} selector
   * @param {Object} options
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

  _showAll() {
    this.elements.forEach((el) => el.classList.add("reveal--visible"));
  }

  destroy() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }
}
