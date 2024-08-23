import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Parango Blog",
  DESCRIPTION:
    "En Parango Blog, registro mis aprendizajes y pruebas de nuevas herramientas y códigos, compartiendo mi progreso en el mundo del desarrollo.",
  EMAIL: "pabloarangobte@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Inicio",
  DESCRIPTION:
    "Una visión general de mi viaje en desarrollo, con herramientas, código, y progreso documentado.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION:
    "Una colección de mis aprendizajes sobre herramientas y tecnologías de desarrollo",
};

export const PROJECTS: Metadata = {
  TITLE: "Proyectos",
  DESCRIPTION:
    "Una colección de mis proyectos con enlaces a repositorios y demostraciones en vivo.",
};

export const SOCIALS: Socials = [
  {
    NAME: "X (Twitter)",
    HREF: "https://x.com/parangodev",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/parangodev",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/pabloarangodev/",
  },
];
