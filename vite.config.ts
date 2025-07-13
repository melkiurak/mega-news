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
      "@page": path.resolve(__dirname, "src/page"),
      "@lib": path.resolve(__dirname, "src/lib"),
      "@icons": path.resolve(__dirname, "src/assets/icons"),
      "@reducer": path.resolve(__dirname, "src/redux/reducers"),
      "@img": path.resolve(__dirname, "src/assets/img"),
      "@styles": path.resolve(__dirname, "src/styles"),
      events: "events",
    },
  },
});
