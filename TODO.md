# Turborepo + PNPM Monorepo Setup Guide

This guide will walk you through setting up a minimal monorepo using Turborepo and PNPM with TypeScript, featuring an Astro web app and shared tooling configurations.

## Prerequisites

- Node.js 18+ installed
- Basic knowledge of JavaScript/TypeScript
- Familiarity with package managers

## Step 1: Install PNPM and Turborepo

```bash
# Install PNPM globally
npm install -g pnpm

# Verify installation
pnpm --version
```

## Step 2: Initialize the Monorepo

```bash
# Create project directory
mkdir my-monorepo
cd my-monorepo

# Initialize package.json
pnpm init

# Install Turborepo as dev dependency
pnpm add -D turbo
```

## Step 3: Create the Folder Structure

```bash
# Create main directories
mkdir apps packages

# Create apps subdirectories
mkdir apps/web

# Create packages subdirectories
mkdir packages/eslint-config
mkdir packages/prettier-config
```

Your structure should now look like:

```
my-monorepo/
├── apps/
│   └── web/
├── packages/
│   ├── eslint-config/
│   └── prettier-config/
├── package.json
└── node_modules/
```

## Step 4: Configure Root Package.json

Update your root `package.json`:

```json
{
  "name": "my-monorepo",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "build": "turbo build",
    "dev": "turbo dev",
    "lint": "turbo lint",
    "format": "turbo format",
    "type-check": "turbo type-check"
  },
  "devDependencies": {
    "turbo": "^1.10.16"
  },
  "packageManager": "pnpm@8.15.0",
  "engines": {
    "node": ">=18.0.0"
  }
}
```

## Step 5: Configure PNPM Workspace

Create `pnpm-workspace.yaml` in the root:

```yaml
packages:
  - "apps/*"
  - "packages/*"
```

## Step 6: Create Turborepo Configuration

Create `turbo.json` in the root:

```json
{
  "$schema": "https://turbo.build/schema.json",
  "globalDependencies": ["**/.env.*local"],
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", ".next/**", "!.next/cache/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "lint": {
      "dependsOn": ["^lint"]
    },
    "format": {
      "dependsOn": ["^format"]
    },
    "type-check": {
      "dependsOn": ["^type-check"]
    }
  }
}
```

## Step 7: Set Up the Astro Web App

```bash
cd apps/web

# Initialize Astro project
pnpm create astro@latest . --template minimal --typescript --no-install

# Go back to root
cd ../..
```

Update `apps/web/package.json`:

```json
{
  "name": "web",
  "type": "module",
  "version": "0.0.1",
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro",
    "lint": "eslint .",
    "format": "prettier --write .",
    "type-check": "astro check"
  },
  "dependencies": {
    "astro": "^4.0.0"
  },
  "devDependencies": {
    "@astrojs/check": "^0.3.0",
    "eslint-config": "workspace:*",
    "prettier-config": "workspace:*",
    "typescript": "^5.0.0"
  }
}
```

## Step 8: Create Shared ESLint Configuration

Create `packages/eslint-config/package.json`:

```json
{
  "name": "eslint-config",
  "version": "1.0.0",
  "main": "index.js",
  "dependencies": {
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "@typescript-eslint/parser": "^6.0.0",
    "eslint": "^8.50.0",
    "eslint-plugin-astro": "^0.29.0"
  }
}
```

Create `packages/eslint-config/index.js`:

```javascript
module.exports = {
  extends: [
    "eslint:recommended",
    "@typescript-eslint/recommended",
    "plugin:astro/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  env: {
    node: true,
    es2022: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-explicit-any": "warn",
  },
};
```

## Step 9: Create Shared Prettier Configuration

Create `packages/prettier-config/package.json`:

```json
{
  "name": "prettier-config",
  "version": "1.0.0",
  "main": "index.js",
  "dependencies": {
    "prettier": "^3.0.0",
    "prettier-plugin-astro": "^0.12.0"
  }
}
```

Create `packages/prettier-config/index.js`:

```javascript
module.exports = {
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  printWidth: 80,
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
```

## Step 10: Configure the Web App to Use Shared Configs

Create `apps/web/.eslintrc.cjs`:

```javascript
module.exports = {
  extends: ["eslint-config"],
  root: true,
};
```

Create `apps/web/.prettierrc.cjs`:

```javascript
module.exports = require("prettier-config");
```

Create `apps/web/tsconfig.json`:

```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "strict": true,
    "skipLibCheck": true
  }
}
```

## Step 11: Install Dependencies

From the root directory:

```bash
# Install all dependencies
pnpm install
```

## Step 12: Create Root Configuration Files

Create `.gitignore` in the root:

```gitignore
# Dependencies
node_modules/
.pnpm-store/

# Build outputs
dist/
.astro/

# Environment files
.env
.env.local
.env.production

# IDE
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*
pnpm-debug.log*

# Cache
.turbo/
```

Create `tsconfig.json` in the root:

```json
{
  "compilerOptions": {
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true
  },
  "exclude": ["node_modules", "dist"]
}
```

## Step 13: Test the Setup

Run these commands to verify everything works:

```bash
# Install dependencies (if not done already)
pnpm install

# Start development server
pnpm dev

# In another terminal, test other commands
pnpm lint
pnpm format
pnpm type-check
pnpm build
```

## Final Directory Structure

Your completed monorepo should look like:

```
my-monorepo/
├── apps/
│   └── web/
│       ├── src/
│       ├── public/
│       ├── .eslintrc.cjs
│       ├── .prettierrc.cjs
│       ├── astro.config.mjs
│       ├── package.json
│       └── tsconfig.json
├── packages/
│   ├── eslint-config/
│   │   ├── index.js
│   │   └── package.json
│   └── prettier-config/
│       ├── index.js
│       └── package.json
├── .gitignore
├── package.json
├── pnpm-workspace.yaml
├── tsconfig.json
└── turbo.json
```

## Next Steps

1. **Add more apps**: Create additional apps in the `apps/` folder
2. **Add shared packages**: Create reusable packages in `packages/`
3. **Configure CI/CD**: Set up GitHub Actions or similar for automated builds
4. **Add testing**: Include Jest or Vitest configurations
5. **Environment variables**: Set up shared environment variable management

## Common Commands

```bash
# Start all apps in development mode
pnpm dev

# Build all apps and packages
pnpm build

# Lint all code
pnpm lint

# Format all code
pnpm format

# Type-check all TypeScript
pnpm type-check

# Add dependency to specific package
pnpm add --filter web [package-name]

# Add dependency to root
pnpm add -w [package-name]
```

## Troubleshooting

- **PNPM not found**: Make sure PNPM is installed globally
- **Workspace dependencies not resolving**: Run `pnpm install` from root
- **TypeScript errors**: Ensure all `tsconfig.json` files are properly configured
- **Linting errors**: Check that shared configs are properly referenced

This setup provides a solid foundation for a scalable monorepo with shared tooling and configurations.
