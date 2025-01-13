import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://a2d5-185-6-43-243.ngrok-free.app",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
