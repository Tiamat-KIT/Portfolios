import solid from "solid-start/vite";
import { defineConfig } from "vite";
import vercel from "solid-start-vercel"
import node from "solid-start-node"

const adapter = process.env.NODE_ENV=="production" ? vercel : node

export default defineConfig({
  plugins: [solid({  
    ssr: true,
    adapter: adapter()
  })],
  server: {
    watch: {
      usePolling: true
    }
  },
});
