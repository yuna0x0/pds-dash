import { defineConfig, loadEnv } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { themePlugin } from "./theming";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");

  // Make VITE_ variables available to process.env for build-time plugins
  Object.keys(env).forEach((key) => {
    if (key.startsWith("VITE_")) {
      process.env[key] = env[key];
    }
  });

  return {
    plugins: [themePlugin(), svelte()],
  };
});
