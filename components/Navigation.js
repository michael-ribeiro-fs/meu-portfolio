/**
 * Navigation.js
 * Responsável pelo comportamento da navegação:
 * - Toggle do menu mobile
 * - Scroll spy (destaque do link ativo conforme a seção visível)
 * - Efeito visual no header ao rolar a página
 */
export class Navigation {
  constructor() {
    this.header = document.getElementById("header");
    this.menuToggle = document.getElementById("menu-toggle");
    this.nav = document.getElementById("nav");
    this.links = document.querySelectorAll(".header__link");
    this.sections = document.querySelectorAll("section[id]");
    this.isOpen = false;

    this._bindEvents();
    this._updateOnScroll();
  }

  /** Registra os event listeners necessários */
  _bindEvents() {
    this.menuToggle.addEventListener("click", () => this._toggleMenu());

    this.links.forEach((link) => {
      link.addEventListener("click", () => this._closeMenu());
    });

    window.addEventListener("scroll", () => this._updateOnScroll(), {
      passive: true,
    });
  }

  /** Abre/fecha o menu mobile */
  _toggleMenu() {
    this.isOpen = !this.isOpen;
    this.menuToggle.classList.toggle(
      "header__menu-toggle--active",
      this.isOpen,
    );
    this.nav.classList.toggle("header__nav--open", this.isOpen);
    document.body.style.overflow = this.isOpen ? "hidden" : "";
  }

  /** Fecha o menu mobile (se estiver aberto) */
  _closeMenu() {
    if (!this.isOpen) return;
    this.isOpen = false;
    this.menuToggle.classList.remove("header__menu-toggle--active");
    this.nav.classList.remove("header__nav--open");
    document.body.style.overflow = "";
  }

  /**
   * Atualiza estados visuais com base no scroll:
   * - Borda do header
   * - Link ativo (scroll spy)
   */
  _updateOnScroll() {
    const scrollY = window.scrollY;

    this.header.classList.toggle("header--scrolled", scrollY > 10);

    const viewportCenter = scrollY + window.innerHeight / 3;

    this.sections.forEach((section) => {
      const top = section.offsetTop - 100;
      const bottom = top + section.offsetHeight;
      const id = section.getAttribute("id");
      const isActive = viewportCenter >= top && viewportCenter < bottom;

      this.links.forEach((link) => {
        const isMatch = link.getAttribute("href") === `#${id}`;
        link.classList.toggle("header__link--active", isActive && isMatch);
      });
    });
  }
}
