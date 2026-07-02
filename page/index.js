/**
 * index.js
 * Ponto de entrada da aplicação.
 * Importa e inicializa todos os módulos na ordem correta.
 */
import { Navigation } from "../components/Navigation.js";
import { ScrollReveal } from "../components/ScrollReveal.js";
import { ProjectsRenderer } from "../components/ProjectsRenderer.js";

class App {
  constructor() {
    this._init();
  }

  _init() {
    /* 1. Renderiza o conteúdo dinâmico (stack, projetos, contato) */
    new ProjectsRenderer();

    /* 2. Inicializa o comportamento da navegação */
    new Navigation();

    /* 3. Inicializa as animações de scroll reveal */
    new ScrollReveal();
  }
}

/* Aguarda o DOM estar completamente carregado */
document.addEventListener("DOMContentLoaded", () => {
  new App();
});
