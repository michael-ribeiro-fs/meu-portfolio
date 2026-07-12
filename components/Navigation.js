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

  _bindEvents() {
    this.menuToggle.addEventListener("click", () => this._toggleMenu());

    this.links.forEach((link) => {
      link.addEventListener("click", () => this._closeMenu());
    });

    window.addEventListener("scroll", () => this._updateOnScroll(), {
      passive: true,
    });
  }

  _toggleMenu() {
    this.isOpen = !this.isOpen;
    this.menuToggle.classList.toggle(
      "header__menu-toggle--active",
      this.isOpen,
    );
    this.nav.classList.toggle("header__nav--open", this.isOpen);
    document.body.style.overflow = this.isOpen ? "hidden" : "";
  }

  _closeMenu() {
    if (!this.isOpen) return;
    this.isOpen = false;
    this.menuToggle.classList.remove("header__menu-toggle--active");
    this.nav.classList.remove("header__nav--open");
    document.body.style.overflow = "";
  }

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
