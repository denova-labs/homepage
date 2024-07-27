<h1 align="center">DeNovA Labs Homepage</h1>

<p align="center">
  Landing website for company activities and news!
</p>

<p align="center">
  <a href="https://twitter.com/allenmcao">
    <img src="https://img.shields.io/twitter/follow/allenmcao?style=flat&label=miickasmt&logo=twitter&color=0bf&logoColor=fff" alt="allenmcao Twitter follower count" />
  </a>
</p>

<p align="center">
  <a href="#introduction"><strong>Introduction</strong></a> ·
  <a href="#installation"><strong>Installation</strong></a> ·
  <a href="#author"><strong>Author</strong></a> ·
  <a href="#credits"><strong>Credits</strong></a>
</p>
<br/>

## Introduction

This is primarily a landing website designed to advertise the company projects and get donors.
It is built with Next.js 14, Prisma, Neon, Auth.js v5, Resend, React Email, Shadcn/ui, and Stripe.
<br/>
Stripe integration is currently not used at the moment, but could be integrated in future for some bundled subscription across products or paid access to certain materials.
<br/>
The base boilerplate is the SaaS starter kit by mickasmt.

## Developing

Clone & create this repo locally

### Steps
> [!NOTE]  
> I use [pnpm](https://www.npmjs.com/package/pnpm) package for installation and faster building.
>
> Use this command to install globally: `npm i -g pnpm`

1. Install dependencies using pnpm:

```sh
pnpm install
```

2. Copy `.env.example` to `.env.local` and update the variables. Only AUTH_SECRET is required to generate next step.

```sh
cp .env.example .env.local
```

3. Generate the prisma client with the current secrets if not in auto-ran already.

```sh
npx prisma generate
```
or

```sh
pnpm postinstall
```

4. Start the development server:

```sh
pnpm run dev
```

> [!NOTE]  
> I use [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) package for update this project.
>
> Use this command for update your project: `ncu -i --format group`

## Roadmap
- [ ] Upgrade eslint to v9
- [ ] Add resend for success subscriptions

### Frameworks

- [Next.js](https://nextjs.org/) – React framework for building performant apps with the best developer experience
- [Auth.js](https://authjs.dev/) – Handle user authentication with ease with providers like Google, Twitter, GitHub, etc.
- [Prisma](https://www.prisma.io/) – Typescript-first ORM for Node.js
- [React Email](https://react.email/) – Versatile email framework for efficient and flexible email development

### Platforms

- [Vercel](https://vercel.com/) – Easily preview & deploy changes with git
- [Resend](https://resend.com/) – A powerful email framework for streamlined email development
- [Neon](https://neon.tech/) – Serverless Postgres with autoscaling, branching, bottomless storage and generous free tier.

### UI

- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework for rapid UI development
- [Shadcn/ui](https://ui.shadcn.com/) – Re-usable components built using Radix UI and Tailwind CSS
- [Framer Motion](https://framer.com/motion) – Motion library for React to animate components with ease
- [Lucide](https://lucide.dev/) – Beautifully simple, pixel-perfect icons
- [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) – Optimize custom fonts and remove external network requests for improved performance
- [`ImageResponse`](https://nextjs.org/docs/app/api-reference/functions/image-response) – Generate dynamic Open Graph images at the edge

### Hooks and Utilities

- `useIntersectionObserver` – React hook to observe when an element enters or leaves the viewport
- `useLocalStorage` – Persist data in the browser's local storage
- `useScroll` – React hook to observe scroll position ([example](https://github.com/mickasmt/precedent/blob/main/components/layout/navbar.tsx#L12))
- `nFormatter` – Format numbers with suffixes like `1.2k` or `1.2M`
- `capitalize` – Capitalize the first letter of a string
- `truncate` – Truncate a string to a specified length
- [`use-debounce`](https://www.npmjs.com/package/use-debounce) – Debounce a function call / state update

### Code Quality

- [TypeScript](https://www.typescriptlang.org/) – Static type checker for end-to-end typesafety
- [Prettier](https://prettier.io/) – Opinionated code formatter for consistent code style
- [ESLint](https://eslint.org/) – Pluggable linter for Next.js and TypeScript

### Miscellaneous

- [Vercel Analytics](https://vercel.com/analytics) – Track unique visitors, pageviews, and more in a privacy-friendly way
