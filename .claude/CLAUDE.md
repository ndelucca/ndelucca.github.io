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

## TypeScript Style Guide

This project follows strict TypeScript conventions for consistency and maintainability. All TypeScript code must adhere to these standards.

### 1. Export Patterns

**Always use export-at-declaration:**

```typescript
// CORRECT
export const functionName = (param: Type): ReturnType => {
  return result;
};

export interface InterfaceName {
  field: Type;
}

// INCORRECT - Don't export separately
export { functionName };
const functionName = (param: Type): ReturnType => {
  return result;
};
```

### 2. Function Declarations

**Always use const arrow functions with explicit return types:**

```typescript
// CORRECT - Exported functions
export const publicFunction = (param: string): string => {
  return param.toUpperCase();
};

// CORRECT - Private functions
const privateHelper = (param: number): boolean => {
  return param > 0;
};

// INCORRECT - Don't use function keyword
function publicFunction(param: string): string {
  return param.toUpperCase();
}

// INCORRECT - Missing return type
const publicFunction = (param: string) => {
  return param.toUpperCase();
};
```

### 3. Async Functions

**Always include return type Promise<T> and proper error handling:**

```typescript
// CORRECT
export const fetchData = async (): Promise<DataType> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch data:', error);
    throw error; // or return fallback
  }
};

// INCORRECT - Missing return type and error handling
export const fetchData = async () => {
  const response = await fetch(url);
  return await response.json();
};
```

### 4. DOM Operations

**Always check for null before using DOM elements:**

```typescript
// CORRECT
const element = document.querySelector('#id');
if (!element) {
  console.error('Element #id not found');
  return;
}
// Use element safely

// INCORRECT - No null check
const element = document.querySelector('#id');
element.innerHTML = 'text'; // Potential runtime error!
```

### 5. Type Definitions

**Prefer interfaces for object shapes, use unknown for uncertain types:**

```typescript
// CORRECT
export interface DataStructure {
  name: string;
  value: number;
  optional?: string;
}

// For API responses with unknown structure
export interface ApiResponse {
  data: unknown[];
}

// INCORRECT - Don't use object type
interface BadStructure {
  data: object[]; // Too vague
}
```

### 6. String Literals

**Use single quotes for strings, template literals for interpolation:**

```typescript
// CORRECT
const message = 'Hello world';
const greeting = `Hello ${name}`;
const apiUrl = 'https://api.example.com';

// INCORRECT - Inconsistent quotes
const message = "Hello world";
const greeting = 'Hello ' + name;
```

**Note:** A `.prettierrc` file is configured to enforce this automatically.

### 7. Documentation

**Add JSDoc comments to all exported functions and modules:**

```typescript
/**
 * Module description
 * @module moduleName
 */

/**
 * Function description
 * @param paramName - Description of parameter
 * @returns Description of return value
 * @throws {Error} Description of when errors are thrown
 */
export const functionName = (paramName: Type): ReturnType => {
  // implementation
};
```

### 8. Error Handling

**Standardized error handling pattern:**

```typescript
// For functions that should fail gracefully
try {
  // risky operation
} catch (error) {
  console.error('Descriptive error message:', error);
  return fallbackValue; // or throw
}

// For localStorage/JSON operations
try {
  const data = JSON.parse(localStorage.getItem(key) || '{}');
  return data;
} catch {
  return {}; // Silent failure with safe default
}
```

### 9. Variable Declarations

**Use const by default, let only when reassignment is needed:**

```typescript
// CORRECT
const apiUrl = 'https://api.example.com';
const data = fetchData();
let counter = 0; // Will be reassigned

// INCORRECT
let apiUrl = 'https://api.example.com'; // Never reassigned
var counter = 0; // Never use var
```

### 10. Array and Object Spread

**Prefer spread syntax over older methods:**

```typescript
// CORRECT - Modern spread syntax
const uniqueValues = [...new Set(array)];
const combined = { ...defaults, ...overrides };

// INCORRECT - Older methods
const uniqueValues = Array.from(new Set(array));
const combined = Object.assign({}, defaults, overrides);
```

### 11. Routine Files Pattern

**Monthly routine files must follow this exact pattern:**

```typescript
// Monthly routine data - description
import { MonthRoutine, DayWorkout } from './types';

export const routine2025_XX: MonthRoutine = {
  // ... routine data
};

// Utility functions
export const getWorkoutByWeekAndDay = (week: number, day: number): DayWorkout | undefined => {
  return routine2025_XX.workoutDays.find(w => w.week === week && w.day === day);
};

export const getCurrentWeekWorkouts = (week: number): DayWorkout[] => {
  return routine2025_XX.workoutDays.filter(w => w.week === week);
};

export const getAllWeeks = (): number[] => {
  return [...new Set(routine2025_XX.workoutDays.map(w => w.week))].sort();
};

export const getTotalWeeks = (): number => {
  return Math.max(...routine2025_XX.workoutDays.map(w => w.week));
};

export const getTotalWorkoutDays = (): number => {
  return routine2025_XX.workoutDays.length;
};

export const getWeekRange = (): { min: number; max: number } => {
  const weeks = getAllWeeks();
  return { min: Math.min(...weeks), max: Math.max(...weeks) };
};
```

### 12. Module File Pattern

**All module files should follow this structure:**

```typescript
/**
 * Module description
 * @module moduleName
 */

// Imports
import { ExternalType } from 'library';

// Constants
const MODULE_CONSTANT = 'value';

// Private helpers with JSDoc
/**
 * Helper function description
 */
const privateHelper = (param: Type): ReturnType => {
  // implementation
};

// Public exports with JSDoc
/**
 * Public function description
 * @param param - Parameter description
 * @returns Return value description
 */
export const publicFunction = (param: Type): ReturnType => {
  // implementation
};
```

### TypeScript Configuration

The project uses strict TypeScript settings (see `tsconfig.json`):
- `strict: true` - All strict type checking enabled
- `strictNullChecks: true` - Null and undefined must be handled explicitly
- `noUnusedLocals: true` - Unused variables cause errors
- `noUnusedParameters: true` - Unused parameters cause errors
- Target: ES2020 with ES2020 modules

### Code Quality Tools

- **Prettier** (`.prettierrc`) - Automatic code formatting with single quotes
- **TypeScript** - Strict type checking enabled
- **Jest** - Unit testing framework

### When Writing New Code

1. Start with proper JSDoc module and function documentation
2. Use explicit return types on all functions
3. Add null checks for all DOM operations
4. Wrap risky operations in try/catch blocks
5. Use const arrow functions with types
6. Export at declaration, not separately
7. Follow existing patterns in similar files
8. Run `npm test` to ensure no regressions
9. Run `npm run build` to verify TypeScript compilation

### Common Patterns Reference

**Fetch Pattern:**
```typescript
export const fetchData = async (): Promise<DataType> => {
  try {
    const response = await fetch(url, { headers: { 'Content-Type': 'application/json' } });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch failed:', error);
    return fallbackData;
  }
};
```

**DOM Initialization Pattern:**
```typescript
const initializeComponent = (): void => {
  const element = document.querySelector('#component');
  if (!element) {
    console.error('Component element not found');
    return;
  }

  try {
    // Safe DOM operations
  } catch (error) {
    console.error('Component initialization failed:', error);
  }
};

window.addEventListener('load', initializeComponent);
```

**LocalStorage Pattern:**
```typescript
const saveData = (key: string, data: DataType): void => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Failed to save data:', error);
  }
};

const loadData = (key: string): DataType | null => {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
};
```
