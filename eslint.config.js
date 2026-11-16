import js from "@eslint/js";
import prettier from "eslint-config-prettier/flat";

export default [
  { ignores: ["node_modules/**", ".eslintrc.js"] },
  js.configs.recommended,
  {
    languageOptions: {
      globals: { console: "readonly", process: "readonly", fetch: "readonly" },
    },
    rules: { "no-unused-vars": ["error", { argsIgnorePattern: "^_" }] },
  },
  prettier,
];
