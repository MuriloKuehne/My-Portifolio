# Portfolio Website

A modern, responsive portfolio website built with Next.js, showcasing projects, skills, certifications, and contact information.

## Features

- **Modern Design**: Clean, responsive UI with dark/light theme support
- **Project Showcase**: Display projects with markdown-based content management
- **About Section**: Personal information, skills, languages, and certifications
- **Contact Links**: Easy access to email, GitHub, LinkedIn, and Instagram
- **Theme Toggle**: Switch between light and dark modes
- **Smooth Animations**: Enhanced user experience with Framer Motion
- **Type-Safe**: Full TypeScript implementation

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI primitives
- **Animations**: Framer Motion
- **Content Management**: Markdown files with gray-matter
- **Markdown Processing**: remark and remark-html
- **Theme Management**: next-themes

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portifolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portifolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── sections/         # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   ├── ui/               # Reusable UI components
│   ├── Header.tsx
│   ├── ProjectCard.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── content/              # Content files
│   └── projects/        # Project markdown files
├── lib/                 # Utility functions
│   ├── config.ts        # Personal information and configuration
│   ├── projects.ts      # Project data fetching utilities
│   └── utils.ts         # Helper functions
└── public/              # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server

## Configuration

Personal information, skills, certifications, and contact links can be configured in `lib/config.ts`. Projects are managed through markdown files in `content/projects/`.

### Adding a Project

1. Create a new markdown file in `content/projects/`
2. Add frontmatter with project metadata:
```markdown
---
title: "Project Name"
description: "Project description"
status: "completed" | "in-progress" | "planned"
tags: ["tag1", "tag2"]
image: "/path/to/image.png"
link: "https://project-url.com"
github: "https://github.com/username/repo"
---

Project content in markdown format...
```

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy with default settings

The project is optimized for Vercel's platform and will work out of the box.

## License

Private project - All rights reserved.
