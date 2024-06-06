import { resolve } from "path";
import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import { ViteMinifyPlugin } from 'vite-plugin-minify'
import autoprefixer from "autoprefixer";
import sortMediaQueries from "postcss-sort-media-queries";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import replace from 'vite-plugin-filter-replace';

export default defineConfig({
  base: "/potis/",
  server: {
    open: "/potis/pages.html",
  },
  plugins: [
    injectHTML(),
    ViteMinifyPlugin(),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|tiff|webp|avif)$/i,
      svg: null,
      png: {
        quality: 70,
      },
      jpeg: {
        quality: 70,
      },
      jpg: {
        quality: 70,
      },
      tiff: {
        quality: 70,
      },
    }),
    replace([
      {
        filter: /\.html$/,
        replace: {
          from: /@img/g,
          to: "/images",
        },
      },
    ]),
  ],
  build: {
    rollupOptions: {
      input: {
        pages: resolve(__dirname, "pages.html"),
        demo: resolve(__dirname, "demo/index.html"),
        "created-vacancy-open": resolve(__dirname, "created-vacancy-open/index.html"),
        "created-vacancy-draft": resolve(__dirname, "created-vacancy-draft/index.html"),
        "vacancy-active-open": resolve(__dirname, "vacancy-active-open/index.html"),
        "vacancy-active-draft": resolve(__dirname, "vacancy-active-draft/index.html"),
        "vacancy-active-draft-empty": resolve(__dirname, "vacancy-active-draft-empty/index.html"),
        "vacancy-active-closed": resolve(__dirname, "vacancy-active-closed/index.html"),
        "vacancy-active-closed-empty": resolve(__dirname, "vacancy-active-closed-empty/index.html"),
      },
    },
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
        sortMediaQueries(),
      ],
    },
  },
});
