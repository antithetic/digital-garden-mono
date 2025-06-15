/** @type {import("prettier").Config} */
export default {
    printWidth: 100,
    singleQuote: true,
    semi: false,
    tabWidth: 2,
    plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
    tailwindStylesheet: "@styles/global.css",
    overrides: [
      {
        files: ["**/*.astro"],
        options: {
          parser: "astro",
        },
      },
    ],
  };