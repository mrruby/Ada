import eslint from "@eslint/js"
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"
import tseslint from "typescript-eslint"
import reactPlugin from "eslint-plugin-react"

export default [
  eslint.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      react: reactPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      "react/prop-types": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/camelcase": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-var-requires": "off",
      "no-undef": "off",
    },
  },
  {
    ignores: [
      "**/node_modules/**",
      "**/.cache/**",
      "**/public/**",
      "**/.gitignore",
    ],
  },
  eslintPluginPrettierRecommended,
]
