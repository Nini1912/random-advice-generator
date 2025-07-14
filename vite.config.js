import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/random-advice-generator/",
  plugins: [react()],
});
