import { DocsConfig } from "types";

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Guides",
      href: "/guides",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
        },
        {
          title: "Access",
          href: "/docs/access",
        },
      ],
    },
    {
      title: "Homepage Development",
      items: [
        {
          title: "Installation",
          href: "/docs/homepagedev/installation",
        },
        {
          title: "Authentification",
          href: "/docs/homepagedev/authentification",
        },
        {
          title: "Blog",
          href: "/docs/homepagedev/blog",
        },
        {
          title: "Components",
          href: "/docs/homepagedev/components",
        },
        {
          title: "Config files",
          href: "/docs/homepagedev/config-files",
        },
        {
          title: "Database",
          href: "/docs/homepagedev/database",
        },
        {
          title: "Email",
          href: "/docs/homepagedev/email",
        },
        {
          title: "Markdown files",
          href: "/docs/homepagedev/markdown-files",
        },
        {
          title: "Subscriptions",
          href: "/docs/homepagedev/subscriptions",
        },
      ],
    },
  ],
};
