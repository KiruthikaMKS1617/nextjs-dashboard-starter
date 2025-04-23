import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: pluginReact,
    },
    rules: {
      "react/react-in-jsx-scope": "off", // For React 17+
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
