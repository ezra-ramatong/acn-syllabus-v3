# ACN Syllabus v3

This represents a fresh approach to organizing and presenting our educational content, designed to complement (not replace) the existing Hugo-based system.

## About This Project

While our current Hugo build remains deeply integrated with [Tilde](https://github.com/Umuzi-org/Tilde) for tracking individual topic and project cards, this new documentation site focuses on providing:

- **Enhanced Search Capabilities** - Find content quickly across the entire curriculum
- **Improved Organization** - Logical structure that makes navigation intuitive
- **Persistent Navigation State** - Your place in the documentation is preserved as you browse
- **Streamlined Experience** - Clean, focused interface optimized for learning

This is not a replacement for our existing workflow, but rather a complementary resource that offers a more organized and searchable view of our curriculum materials.

## Prerequisites

- **Node.js**: v22.16.0 (Current LTS) or compatible version
- **Package Manager**: pnpm (recommended) or npm

## Quick Start

### Using npm

```bash
# Install dependencies
npm install

# Start development server
npm run docs:dev

# Build for production
npm run docs:build

# Preview production build
npm run docs:preview
```

### Using pnpm (optional)

```bash
# Install dependencies
pnpm install

# Start development server
pnpm docs:dev

# Build for production
pnpm docs:build

# Preview production build
pnpm docs:preview
```

## Development

The development server will start at `http://localhost:5173` with hot module replacement enabled. Any changes to your documentation files will be reflected immediately in the browser.

> [!NOTE]
> If you make changes to `.vitepress/config.ts`, you need to refresh the server, you can do this by hitting the 'r' key in the terminal where the server is running

## Project Structure

```
├── .vitepress/              # VitePress configuration
│   ├── config.ts           # Main configuration file
│   ├── sidebars/           # Navigation sidebar definitions
│   │   ├── projects.ts     # Projects navigation
│   │   ├── topics.ts       # Topics navigation
│   │   └── sections/       # Section-specific navigation
│   │       ├── onboarding.ts
│   │       ├── tech-big-picture.ts
│   │       └── web-foundations.ts
│   └── theme/              # Custom theme configuration
│       ├── index.ts        # Theme entry point
│       └── style.css       # Custom styles
├── content/                # Documentation source files
│   ├── projects/           # Project documentation
│   ├── topics/             # Topic documentation
│   ├── public/             # Static assets (logos, images, etc.)
│   └── index.md            # Homepage content
├── node_modules/           # Dependencies
├── .gitignore              # Git ignore rules
├── package.json            # Project dependencies and scripts
├── pnpm-lock.yaml          # Lock file for pnpm
└── README.md               # This file
```

## Why VitePress?

Chose **[VitePress](https://vitepress.dev/)** for its simplicity and adherence to web standards. If you know HTML, CSS, a bit of JavaScript, and Markdown, you're already equipped to work with this project. No complex learning curve or proprietary syntax - just clean, intuitive tooling that gets out of your way.

## Tooling

- **TypeScript** Can be changed to js no issue, types just make things clearer and less error prone
- **[VitePress](https://vitepress.dev/)** - Fast, modern static site generator built on web standards
- **[Vue 3](https://vuejs.org/)** - Progressive JavaScript framework for enhanced interactivity
