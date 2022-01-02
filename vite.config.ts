import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "es2015",
    lib: {
      name: "lit-image-preview",
      entry: "src/index.ts",
      fileName: (format) => `lit-image-preview.${format}.js`,
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
});
