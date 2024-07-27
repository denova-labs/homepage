import { SidebarNavItem, SiteConfig } from "types";
import { env } from "@/env.mjs";

const site_url = env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "DeNovA Labs",
  description:
    "Homepage for DeNovA Labs LLC.",
  url: site_url,
  ogImage: `${site_url}/_static/og.jpg`,
  links: {
    twitter: "https://twitter.com/denova-labs",
    github: "https://github.com/denova-labs/homepage",
  },
  mailSupport: "support@denova.ai",
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Company",
    items: [
      { title: "About Us", href: "/aboutus" },
      { title: "Terms", href: "/terms" },
      { title: "Privacy", href: "/privacy" },
    ],
  },
  {
    title: "Projects",
    items: [
      { title: "Linguify", href: "/projects" },
      { title: "Platefull", href: "/projects" },
    ],
  },
  {
    title: "Docs",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Access", href: "/docs/access" },
      { title: "Guides", href: "/docs/guides" },
    ],
  },
];
