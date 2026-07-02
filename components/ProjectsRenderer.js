/**
 * ProjectsRenderer.js
 * Responsável por renderizar dinamicamente:
 * - Grid de tecnologias (stack)
 * - Grid de projetos
 * - Links de contato
 *
 * Os dados vêm do módulo projectsData.js.
 * Os ícones são SVG inline para zero dependências externas.
 */
import { projects, stack, contacts } from "./projectsData.js";

/* ---- Mapas de ícones SVG ---- */

const stackIcons = {
  html: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  css: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 7h10"/><path d="M7 12h10"/><path d="M7 17h6"/></svg>`,
  javascript: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/><path d="M9 8h1.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5H9v4"/><path d="M15 16v-4.5a2.5 2.5 0 0 0-5 0V16"/></svg>`,
  react: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/></svg>`,
  nodejs: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7v10l10 5 10-5V7L12 2z"/><path d="M12 22V12"/><path d="M2 7l10 5 10-5"/></svg>`,
  typescript: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2"/><path d="M9 7v10"/><path d="M15 7c-2 0-3 1.5-3 3s1 2.5 3 3 3 1.5 3 3-1 3-3 3"/><path d="M9 12h6"/></svg>`,
  git: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></svg>`,
  sql: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.657 3.582 3 8 3s8-1.343 8-3V5"/></svg>`,
};

const contactIcons = {
  email: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4L12 13 2 4"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`,
  github: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="3"/><path d="M7 11v6"/><path d="M7 7v.01"/><path d="M17 17v-3.5c0-2-1-3.5-3.5-3.5S10 12.5 10 12.5V17"/></svg>`,
};

/* Ícones usados nos cards de projeto */
const codeIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;

const externalLinkIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;

const githubSmallIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`;

/* ---- Classe principal ---- */

export class ProjectsRenderer {
  constructor() {
    this._renderStack();
    this._renderProjects();
    this._renderContacts();
  }

  /** Renderiza o grid de tecnologias */
  _renderStack() {
    const grid = document.getElementById("stack-grid");
    if (!grid) return;

    grid.innerHTML = stack
      .map(
        (item, index) => `
      <div class="stack-item reveal reveal--delay-${(index % 4) + 1}">
        <div class="stack-item__icon">
          ${stackIcons[item.icon] || stackIcons.html}
        </div>
        <span class="stack-item__name">${item.name}</span>
      </div>`,
      )
      .join("");
  }

  /** Renderiza o grid de projetos */
  _renderProjects() {
    const grid = document.getElementById("projects-grid");
    if (!grid) return;

    grid.innerHTML = projects
      .map(
        (project, index) => `
      <article class="project-card reveal reveal--delay-${(index % 3) + 1}">
        <div class="project-card__header">
          <div class="project-card__icon">${codeIcon}</div>
          <div class="project-card__links">
            <a
              href="${project.deployUrl}"
              target="_blank"
              rel="noopener noreferrer"
              class="project-card__link"
              aria-label="Ver deploy de ${project.title}"
            >
              ${externalLinkIcon}
            </a>
            <a
              href="${project.repoUrl}"
              target="_blank"
              rel="noopener noreferrer"
              class="project-card__link"
              aria-label="Ver repositório de ${project.title}"
            >
              ${githubSmallIcon}
            </a>
          </div>
        </div>
        <h3 class="project-card__title">${project.title}</h3>
        <p class="project-card__description">${project.description}</p>
        <div class="project-card__tags">
          ${project.tags.map((tag) => `<span class="badge">${tag}</span>`).join("")}
        </div>
      </article>`,
      )
      .join("");
  }

  /** Renderiza os links de contato */
  _renderContacts() {
    const container = document.getElementById("contact-links");
    if (!container) return;

    container.innerHTML = contacts
      .map(
        (contact, index) => `
      <a
        href="${contact.url}"
        target="_blank"
        rel="noopener noreferrer"
        class="contact-link reveal reveal--delay-${index + 1}"
      >
        <span class="contact-link__icon">
          ${contactIcons[contact.icon] || contactIcons.email}
        </span>
        <span>${contact.label}</span>
      </a>`,
      )
      .join("");
  }
}
