import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import pluginImport from "eslint-plugin-import";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: pluginReact,
      "jsx-a11y": pluginJsxA11y,
      import: pluginImport,
    },
    rules: {
      "react/react-in-jsx-scope": "off", // Si usás React 17+
      "react/prop-types": "off", // Si no usás PropTypes
      "import/order": ["warn", { "alphabetize": { order: "asc" } }],
    },
  },
  pluginReact.configs.flat.recommended,
]);
