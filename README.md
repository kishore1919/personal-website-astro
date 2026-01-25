# Personal Website - Astro

Welcome to the repository for my personal website! This project is built with [Astro](https://astro.build), a modern static site generator, and uses [Bun](https://bun.sh) as the package manager and runtime. It's designed to be fast, content-focused, and easily deployable.

## ✨ Features

-   **Built with Astro:** Leverages Astro's island architecture for optimal performance.
-   **Managed with Bun:** Utilizes the fast Bun runtime and package manager.
-   **SEO Friendly:** Structured for search engine optimization.
-   **Ready to Deploy:** Easily deployable to any static hosting service.

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

1.  **Clone the repository:**
    *(You'll need to replace `your-username/your-repo-name` with your actual repository details)*
    ```sh
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install dependencies:**
    ```sh
    bun install
    ```

3.  **Start the development server:**
    ```sh
    bun dev
    ```
    Your site is now running at `http://localhost:4321`!

## 📂 Project Structure

The project follows the standard Astro project structure:

```text
.
├── public/              # Static assets (fonts, icons, images) that are not processed.
├── src/
│   ├── assets/          # Project assets like CSS, or images to be optimized by Astro.
│   ├── components/      # Reusable Astro/UI Framework components.
│   ├── content/         # (Optional) Collections for blogs, projects, etc.
│   ├── layouts/         # Reusable page layouts.
│   └── pages/           # Astro pages and API endpoints.
├── astro.config.mjs     # Astro configuration file.
└── package.json         # Project dependencies and scripts.
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun dev`             | Starts local dev server at `localhost:4321`      |
| `bun build`           | Build your production site to `./dist/`          |
| `bun preview`         | Preview your build locally, before deploying     |
| `bun astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun astro -- --help` | Get help using the Astro CLI                     |
