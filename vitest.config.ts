import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@page": path.resolve(__dirname, "src/page"),
      "@lib": path.resolve(__dirname, "src/lib"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@icons": path.resolve(__dirname, "src/assets/icons"),
      "@reducer": path.resolve(__dirname, "src/redux/reducers"),
      "@img": path.resolve(__dirname, "src/assets/img"),
      "@styles": path.resolve(__dirname, "src/styles"),
      events: "events",
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
});
