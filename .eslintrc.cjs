/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/component-name-in-template-casing": ["error", "kebab-case"],
    "vue/attribute-hyphenation": ["error", "always"],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "vue/no-setup-props-destructure": "off",
    "no-extra-boolean-cast": "off",
  },
  globals: { NodeJS: true, __DEV__: true, APP_CONFIG: true },
};
