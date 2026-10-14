import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, type Plugin} from 'vite';
import {GA4_MEASUREMENT_ID} from './src/config';

/**
 * Injects the standard GA4 (gtag.js) snippet directly into the built
 * `index.html` <head> so the Google tag is part of the HTML the browser parses.
 *
 * Why not queue it from JavaScript at runtime (as the previous revision did)?
 *  - It starts as soon as the HTML is parsed, instead of waiting for the ~300 KB
 *    React bundle to be downloaded, parsed and executed. On a slow mobile
 *    connection a visitor can bounce before the JS ever runs, and that visit is
 *    then never counted at all.
 *  - It still works if the app bundle fails to load.
 *  - It is visible to HTML-level audit tools and Google's own tag detection,
 *    which do not execute JavaScript and would otherwise report the site as
 *    untagged.
 *
 * `apply: 'build'` keeps the snippet out of `npm run dev`, so localhost traffic
 * never reaches the GA4 property. Because gtag is then absent in dev,
 * `trackEvent()` in src/lib/analytics.ts naturally no-ops there — the same
 * behaviour the old `import.meta.env.DEV` guard provided.
 */
function injectGa4Snippet(): Plugin {
  return {
    name: 'inject-ga4-snippet',
    apply: 'build',
    transformIndexHtml(html) {
      const snippet = `
    <!-- Google tag (gtag.js) — GA4 ${GA4_MEASUREMENT_ID} -->
    <link rel="preconnect" href="https://www.googletagmanager.com" />
    <script async src="https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA4_MEASUREMENT_ID}');
    </script>
`;
      return html.replace('</head>', snippet + '  </head>');
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [injectGa4Snippet(), react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      host: true,
      // Allow remote/container preview hosts (e.g. *.e2b.app tunnels) to reach the dev server.
      allowedHosts: ['.e2b.app'],
      // HMR is disabled via the DISABLE_HMR env var (used by AI Studio).
      // File watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    preview: {
      host: true,
    },
  };
});
