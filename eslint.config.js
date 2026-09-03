import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";

export default defineConfig([
  {
    ignores: [
      "dist/**",
    ],
  },

  {
    files: [
      "src/**/*.js",
    ],

    plugins: {
      js,
    },

    extends: [
      "js/recommended",
    ],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",

      globals: {
        ...globals.browser,
      },
    },
  },

  {
    files: [
      "webpack.*.js",
    ],

    plugins: {
      js,
    },

    extends: [
      "js/recommended",
    ],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",

      globals: {
        ...globals.node,
      },
    },
  },
]);