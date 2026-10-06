import netlify from "@astrojs/netlify";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { fileURLToPath, URL } from "node:url";

// https://astro.build/config
export default defineConfig({
  site: "https://shreshtasmg.in",
  output: "server",

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@components": fileURLToPath(
          new URL("./src/components", import.meta.url),
        ),
        "@layouts": fileURLToPath(new URL("./src/layouts", import.meta.url)),
        "@utils": fileURLToPath(new URL("./src/utils", import.meta.url)),
      },
    },
  },

  adapter: netlify({
    edgeMiddleware: true,
  }),
});
