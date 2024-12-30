import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      vue: "vue/dist/vue.esm-bundler.js",
    },
  },
  define: {
    __DEV__: process.env.NODE_ENV === "development",
    __VUE_I18N_FULL_INSTALL__: JSON.stringify(true),
    __INTLIFY_PROD_DEVTOOLS__: JSON.stringify(false),
    __VUE_I18N_LEGACY_API__: JSON.stringify(false),
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/main.ts"),
        app: resolve(__dirname, "index.html"),
      },
      output: {
        entryFileNames: () => {
          return "assets/[name]-[hash].js";
        },
      },
    },
  },
});
