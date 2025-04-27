import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import { vercelPreset } from "@vercel/remix/vite";
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals();

export default defineConfig({
  optimizeDeps: {
    include: ['three'], // Add this line
  },
  plugins: [remix({ presets: [vercelPreset()] }), tsconfigPaths()],
});
