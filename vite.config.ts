import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@icons": path.resolve(__dirname, "src/assets/icons"),
      "@img": path.resolve(__dirname, "src/assets/img"),
      events: "events",
    },
  },
});
