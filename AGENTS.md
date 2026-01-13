# AGENTS.md - AI Coding Assistant Guidelines

> **Role**: Senior Frontend Engineer (Astro/Preact/Tailwind)
> **Language**: Use Traditional Chinese (繁體中文) for all code comments.

## 1. Build, Lint & Test

**Package Manager**: `bun` (Required)

| Command | Description |
| :--- | :--- |
| `bun install` | Install dependencies |
| `bun dev` | Start dev server (localhost:4321) |
| `bun build` | Production build (`dist/`) |
| `bun preview` | Preview production build |
| `bun astro check` | Type-check `.astro` and `.tsx` files |

**Testing**:
- **Status**: No test framework is currently configured.
- **Single Test**: If tests are added (Vitest recommended), run `bun vitest run <file>`.
- **E2E**: Playwright is suggested for future E2E testing.

## 2. Project Structure

```text
src/
├── components/
│   ├── sections/       # Layout sections (Hero, About, Projects...)
│   └── ui/             # shadcn-like UI components (Badge, Button...)
├── data/               # Static data & Types (datas.ts, types.ts)
├── layouts/            # Astro layouts
├── pages/              # File-based routing
└── styles/             # Global CSS (Tailwind v4)
```

## 3. Code Style & Conventions

### Core Stack
- **Framework**: Astro 5.x + Preact (Aliased as React)
- **Styling**: Tailwind CSS 4.x + Motion (formerly Framer Motion)
- **Icons**: `lucide-preact` (interactive) / `@lucide/astro` (static)

### Critical: Preact Aliasing
Imports must look like standard React, but run as Preact.
```tsx
// ✅ Correct
import * as React from "react";
import { motion } from "motion/react"; // Use motion/react, NOT framer-motion

// ❌ Incorrect
import { h } from "preact";
```

### Naming & Case
- **Components**: PascalCase (`ProjectCard.tsx`, `Hero.astro`)
- **Utilities/Data**: camelCase (`utils.ts`, `techMap.ts`)
- **CSS Variables**: kebab-case (`--primary-foreground`)

### TypeScript & Types
- **Strict Mode**: Enabled. No `any` or `@ts-ignore` without strong justification.
- **Interfaces**: Define in `src/data/types.ts`.
- **Props**: Use `interface Props` or component-specific types.

### UI Components (shadcn/ui style)
- Use `data-slot` for styling hooks.
- Support `asChild` via `@radix-ui/react-slot`.
- Use `cn()` for class merging.

```tsx
// Example Pattern
export function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}
```

### Styling (Tailwind v4)
- **Colors**: Defined in `global.css` using OKLCH (e.g., `--primary`).
- **Gradients**: Use CSS variables for dynamic gradients (e.g., project card borders).
- **Animations**: Use `motion/react` for complex interactions, CSS keyframes for simple loops.

### Specific Patterns
- **Accordion**: Use `ProjectAccordion` for collapsible content.
- **HTML in Data**: Use `dangerouslySetInnerHTML` carefully for data containing HTML tags (e.g., highlighted text in descriptions).
- **Images**: Use Astro's `<Image />` for optimization.

## 4. Error Handling
- Log errors with context: `console.error("Context:", error)`.
- Fallback gracefully if data is missing (e.g., empty arrays for mapping).

## 5. Documentation
- **Comments**: MUST be in **Traditional Chinese (繁體中文)**.
- **Docstrings**: Add JSDoc for complex utility functions.
