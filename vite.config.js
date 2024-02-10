import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import windiCSS from "vite-plugin-windicss"; // Import the Windi CSS plugin

export default defineConfig({
  plugins: [
    react(),
    windiCSS(), // Add Windi CSS plugin to the list of plugins
  ],
});
