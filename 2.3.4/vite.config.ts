import { defineConfig } from "vite";

export default defineConfig({
  build: {
    emptyOutDir: true,
    lib: {
      entry: {
        client: "src/client/main.ts",
        server: "src/server/main.ts",
      },
      formats: ["es"],
      fileName: (_format, entryName) => (entryName === "server" ? "server.mjs" : "client.js"),
    },
    rollupOptions: {
      external: [/^node:/],
    },
  },
});
