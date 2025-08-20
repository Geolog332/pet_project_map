// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import unusedImports from "eslint-plugin-unused-imports";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    linterOptions: {
      reportUnusedDisableDirectives: true
    },
    ignores: ["build/**"],
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true
        },
        project: "./tsconfig.json"
      },
      globals: globals.browser
    },
    plugins: {
      js,
      react: pluginReact,
      "react-hooks": reactHooks,
      "unused-imports": unusedImports
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",
      "react/react-in-jsx-scope": "off",
      "no-param-reassign": "off",
      "indent": ["error", 4],
      "quotes": ["error", "single"],
      "object-curly-spacing": ["error", "always"],
      "react/jsx-indent": ["error", 4],
      "react/jsx-indent-props": ["error", 4],
      "sort-imports": ["error", {
        "ignoreCase": false,
        "ignoreDeclarationSort": true,
        "ignoreMemberSort": false,
        "memberSyntaxSortOrder": ["none", "all", "multiple", "single"],
        "allowSeparatedGroups": false
      }],
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          "vars": "all",
          "varsIgnorePattern": "^_",
          "args": "after-used",
          "argsIgnorePattern": "^_"
        }
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          "argsIgnorePattern": "^_",
          "varsIgnorePattern": "^_"
        }
      ]
    },
    extends: ["js/recommended"]
  },
  tseslint.configs.recommended,
  tseslint.configs.strict
]);
