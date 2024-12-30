/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.ts",
    "./src/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--color-primary) / <alpha-value>)",
        danger: "hsl(var(--color-danger) / <alpha-value>)",
        warning: "hsl(var(--color-warning) / <alpha-value>)",
        surface: "hsl(var(--color-surface) / <alpha-value>)",
        "surface-secondary":
          "hsl(var(--color-surface-secondary) / <alpha-value>)",
        "base-color": "hsl(var(--color-text) / <alpha-value>)",
        inverted: "hsl(var(--color-text-inverted) / <alpha-value>)",
        light: "hsl(var(--color-text-light) / <alpha-value>)",
        dark: "hsl(var(--color-text-dark) / <alpha-value>)",
      },
      fontSize: {
        "2xs": ".625rem",
        "3xs": ".55rem",
      },
    },
    transitionDuration: {
      DEFAULT: "500ms",
    },
  },
};
