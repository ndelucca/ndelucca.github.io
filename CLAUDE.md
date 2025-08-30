# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm test` - Run Jest tests
- `npm start` - Start development server on port 3000 with webpack dev server
- `npm run build` - Build production bundle using webpack
- `npm run deploy` - Deploy to GitHub Pages (runs build first)

## Architecture Overview

This is a static website built with TypeScript, Handlebars templates, and Webpack. The build system dynamically generates HTML pages from templates and can include markdown content.

### Key Components

**Build System (webpack.config.cjs)**:
- Dynamically scans for `.hbs` templates and `.md` files to generate entry points
- Creates HTML pages for each template found in `src/templates/`
- Generates CSS bundles from corresponding SCSS files
- Uses Handlebars for templating with partial support

**Template Structure**:
- Main templates in `src/templates/` (index.hbs, ephemerides.hbs, fountain.hbs, markdown.hbs)
- Partials in `src/templates/partials/` for reusable components
- Each template can have corresponding TypeScript and SCSS files that get bundled

**Content Generation**:
- Markdown files should be placed in `./md/` directory (scanned by webpack config)
- Markdown content is processed through `marked` library and rendered via `markdown.hbs` template
- Each markdown file becomes a separate HTML page

**TypeScript Modules**:
- Main application code in `src/ts/`
- Utility modules in `src/ts/modules/` (cow.ts for cowsay integration, fortune.ts, wikiApi.ts)
- Each template can have a corresponding `.ts` file for page-specific logic

**Styling**:
- SCSS files in `src/scss/`
- `main.scss` is the global stylesheet
- Template-specific styles (e.g., `ephemerides.scss`, `markdown.scss`)

### Development Workflow

The build system automatically:
1. Scans for `.hbs` templates and creates corresponding HTML pages
2. Looks for matching `.ts` and `.scss` files for each template
3. Processes markdown files from `./md/` directory into HTML pages
4. Bundles everything with appropriate chunks and dependencies

## Custom Commands

### `upload_month` Command

**Purpose**: Process a monthly workout routine markdown file and generate corresponding TypeScript data structure.

**Usage**: When the user says "upload_month" and has uploaded a markdown file in the `routines/` directory (e.g., `routines/2025_09.md`).

**Process**:
1. Identify the newest markdown file in the `routines/` directory
2. Parse the content following the established structure:
   - Entrada en Calor (common warmup exercises)
   - 4 weeks with 3 days each (12 workout days total)
   - Main exercises with percentage-based warmup sets and working sets
   - Circuit exercises with specific repetitions
3. Generate a new TypeScript file in `src/ts/routines/YYYY_MM.ts` with:
   - Import from common types (`./types`)
   - Data structured according to `MonthRoutine` interface
   - Utility functions for accessing workout data
4. Update `src/ts/routines/index.ts` to include the new routine:
   - Add import statement
   - Add to exports
   - Add to `availableRoutines` registry
   - Update comments to indicate the new month

**File Structure**:
- Common types: `src/ts/routines/types.ts`
- Monthly data: `src/ts/routines/YYYY_MM.ts` (e.g., `2025_08.ts`, `2025_09.ts`)
- Registry: `src/ts/routines/index.ts`
- Source markdown: `routines/YYYY_MM.md`

**Example**:
User uploads `routines/2025_09.md` and says "upload_month" → Generate `src/ts/routines/2025_09.ts` and update index.