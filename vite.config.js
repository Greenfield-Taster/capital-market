import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/capital-market/",
  build: {
    outDir: "dist",
    copyPublicDir: true,
  },
});
