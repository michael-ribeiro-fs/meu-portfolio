/**
 * projectsData.js
 * Dados centralizados do portfólio.
 * Substitua pelos seus dados reais antes de publicar.
 */

/** Projetos exibidos na seção #projects */
export const projects = [
  {
    id: 1,
    title: "Around The U.S",
    description:
      "Aplicação web interativa para compartilhamento e gerenciamento de imagens, com criação, edição e exclusão de cartões, sistema de curtidas, atualização de perfil e avatar, validação de formulários em tempo real, integração com API REST e persistência de dados, seguindo uma arquitetura modular orientada a componentes.",
    tags: [
      "API REST",
      "CRUD",
      "Validação",
      "Autenticação",
      "Async/Await",
      "Gerenciamento Estado",
      "UX Interativa",
      "Persistência Dados",
    ],
    deployUrl: "https://michael-ribeiro-fs.github.io/web_project_around_pt/src",
    repoUrl: "https://github.com/michael-ribeiro-fs/web_project_around_pt",
  },
  {
    id: 2,
    title: "De Pátria para Pátria",
    description:
      "Landing page responsiva desenvolvida a partir de um layout do Figma, com grid de imagens dinâmico, popups reutilizáveis, arquitetura modular em JavaScript, CSS organizado com metodologia BEM e foco em acessibilidade, reutilização de componentes e código escalável.",
    tags: [
      "Responsividade",
      "Grid Layout",
      "Flexbox",
      "Media Queries",
      "BEM",
      "ES Modules",
      "Manipulação DOM",
      "Componentização",
    ],
    deployUrl: "https://michael-ribeiro-fs.github.io/web_project_homeland/",
    repoUrl: "https://github.com/michael-ribeiro-fs/web_project_homeland",
  },
  /*{
    id: 3,
    title: "API RESTful Blog",
    description:
      "API robusta para plataforma de blog com autenticação JWT, CRUD completo, paginação, busca e documentação interativa com Swagger.",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    deployUrl: "https://seu-deploy.com",
    repoUrl: "https://github.com/seu-usuario/seu-repo",
  },*/
];

/** Tecnologias exibidas na seção #stack */
export const stack = [
  { name: "HTML5", icon: "html" },
  { name: "CSS3", icon: "css" },
  { name: "JavaScript", icon: "javascript" },
  { name: "React", icon: "react" },
  { name: "Node.js", icon: "nodejs" },
  // { name: "TypeScript", icon: "typescript" },
  { name: "Git", icon: "git" },
  //{ name: "SQL", icon: "sql" },
];

/** Canais de contato exibidos na seção #contact */
export const contacts = [
  {
    label: "E-mail",
    value: "michael.jrna@hotmail.com",
    url: "mailto:michael.jrna@hotmail.com",
    icon: "email",
  },
  {
    label: "WhatsApp",
    value: "(66) 98114-6860",
    url: "https://api.whatsapp.com/send/?phone=5566981146860&text&type=phone_number&app_absent=0",
    icon: "whatsapp",
  },
  {
    label: "GitHub",
    value: "michael-ribeiro-fs",
    url: "https://github.com/michael-ribeiro-fs",
    icon: "github",
  },
  {
    label: "LinkedIn",
    value: "Michael Ribeiro",
    url: "https://www.linkedin.com/in/michael-ribeiro-br/",
    icon: "linkedin",
  },
];
