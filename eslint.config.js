import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";

export default [
    js.configs.recommended,
    react.configs.flat.recommended,
    react.configs.flat["jsx-runtime"],
    { ignores: ["dist", "node_modules"] },
    {
        files: ["**/*.{js,jsx}"],
        languageOptions: {
            ...react.configs.flat.recommended.languageOptions,
            ecmaVersion: "latest",
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            parserOptions: {
                ecmaVersion: "latest",
                ecmaFeatures: { jsx: true },
                sourceType: "module",
            },
        },
        settings: {
            react: {
                version: "detect",
            },
        },
        plugins: {
            react,
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
            "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
            "react/prop-types": "off",
            "prefer-const": "error",
            "prefer-template": "error",
        },
    },
    eslintConfigPrettier,
    eslintPluginPrettier,
];