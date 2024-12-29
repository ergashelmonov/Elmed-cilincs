import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Elmed-clinics/", // Bu yerda repository nomini ko‘rsating
  build: {
    outDir: "build", // Agar build papkasi boshqacha bo'lsa
  },
});
  