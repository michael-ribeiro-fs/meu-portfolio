import { Navigation } from "../components/Navigation.js";
import { ScrollReveal } from "../components/ScrollReveal.js";
import { ProjectsRenderer } from "../components/ProjectsRenderer.js";

class App {
  constructor() {
    this._init();
  }

  _init() {
    new ProjectsRenderer();

    new Navigation();

    new ScrollReveal();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new App();
});
