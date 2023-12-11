import adapter from "svelte-adapter-bun";
import { vitePreprocess } from "@sveltejs/kit/vite";

const config = {
  kit: {
    adapter: adapter(),
  },
  preprocess: vitePreprocess(),
};

export default config;
