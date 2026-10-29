import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Each page keeps its own HTML file so existing links like /projects.html still work.
export default defineConfig({
  base: "/personal_website/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        projects: resolve(__dirname, "projects.html"),
        skills: resolve(__dirname, "skills.html"),
        ventures: resolve(__dirname, "ventures.html"),
      },
    },
  },
});
