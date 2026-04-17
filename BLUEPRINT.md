# Blueprints + Blueprinter

This repo contains a **blueprint** (a template project) and a **Blueprinter** config that can generate a new project by asking a few questions and then copying/replacing files.

## What’s a “blueprint” here?

- **`blueprint/`**: the template directory that gets copied into your new project.
- **`blueprintconfig.json`**: the prompt + variable configuration Blueprinter uses during generation.

In this repo, the blueprint is a modern **Vite + React + TypeScript + Tailwind** starter with an atomic design-ish component structure.

## How variable replacement works

This repo uses the delimiter from `blueprintconfig.json`:

- **Delimiter**: `%%`
- **Variable(s)**: `projectName` (prompted as “What is the name of your project?”)

Anywhere the blueprint contains template tokens, Blueprinter will replace them using your answers. Examples you can see in this blueprint:

- **File names can be templated**: `blueprint/%%projectName%%.code-workspace`
- **File contents can be templated**: `blueprint/package.json` uses `%% projectName.lowercase %%`
- **README title example**: `# {{ projectName.capitalise }}` (the blueprint’s `README.md`)

## Using the `blueprinter` CLI

Blueprinter is an npm package that provides a `blueprinter` CLI (TypeScript source in `src/`, build output in `dist/`). You must pass a **subcommand**.

### Commands

- **`blueprinter run`**: interactive blueprint flow (prompts, then generates files)
- **`blueprinter add`**: adds a small markdown file in the current directory

### Run locally (during development)

From the `blueprinter` package folder:

```bash
npm run dev -- run
```

Or with defaults (no prompts):

```bash
npm run dev -- run --yes
```

### Build + run compiled output

```bash
npm run build
npm start -- run
```

### Install / use as a CLI

While developing locally, you can link it:

```bash
npm link
blueprinter
```

## What this blueprint generates

When you run `blueprinter run`, it will:

- Ask for **`projectName`**
- Copy everything from `blueprint/`
- Replace `%% ... %%` tokens (including in filenames like `%%projectName%%.code-workspace`)

The result is a ready-to-run Vite React app. After generation, in the generated project folder:

```bash
npm install
npm run start
```
