if (!self.define) {
  let e,
    s = {};
  const n = (n, a) => (
    (n = new URL(n + ".js", a).href),
    s[n] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = n), (e.onload = s), document.head.appendChild(e);
        } else (e = n), importScripts(n), s();
      }).then(() => {
        let e = s[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (a, i) => {
    const c =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[c]) return;
    let t = {};
    const o = (e) => n(e, c),
      r = { module: { uri: c }, exports: t, require: o };
    s[c] = Promise.all(a.map((e) => r[e] || o(e))).then((e) => (i(...e), t));
  };
}
define(["./workbox-40866503"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/1250CiURar9DMzRt-YkWo/_buildManifest.js",
          revision: "27e5220337d68fa472f555eaf55a3cde",
        },
        {
          url: "/_next/static/1250CiURar9DMzRt-YkWo/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/339-784975f6f87ef116.js",
          revision: "784975f6f87ef116",
        },
        {
          url: "/_next/static/chunks/framework-4556c45dd113b893.js",
          revision: "4556c45dd113b893",
        },
        {
          url: "/_next/static/chunks/main-f474e411140fc571.js",
          revision: "f474e411140fc571",
        },
        {
          url: "/_next/static/chunks/pages/404-27b2a373fcef5fff.js",
          revision: "27b2a373fcef5fff",
        },
        {
          url: "/_next/static/chunks/pages/_app-5cd687b40e1c6680.js",
          revision: "5cd687b40e1c6680",
        },
        {
          url: "/_next/static/chunks/pages/_error-a4ba2246ff8fb532.js",
          revision: "a4ba2246ff8fb532",
        },
        {
          url: "/_next/static/chunks/pages/index-4fc11b81db3d0e42.js",
          revision: "4fc11b81db3d0e42",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-3dad41464b7c1ed4.js",
          revision: "3dad41464b7c1ed4",
        },
        {
          url: "/_next/static/css/49308b1030cce437.css",
          revision: "49308b1030cce437",
        },
        {
          url: "/_next/static/css/d00e4a37b20aea08.css",
          revision: "d00e4a37b20aea08",
        },
        {
          url: "/assets/img/404.svg",
          revision: "5343632bab41f9668215b2cae7849de6",
        },
        {
          url: "/assets/img/powered.svg",
          revision: "9daf7b56cc890e9906eb8b17aaf68b0f",
        },
        {
          url: "/assets/img/signumjs.svg",
          revision: "f282275e7c59d8fd74e798b3569f31d3",
        },
        { url: "/favicon.ico", revision: "a0bafcbcdbf12ca80884fae8484265b7" },
        {
          url: "/icons/android-chrome-192x192.png",
          revision: "e9f18770210ee6fc69ad96379b7baef7",
        },
        {
          url: "/icons/android-chrome-512x512.png",
          revision: "283424db2172cae04853edaec1403e90",
        },
        {
          url: "/icons/apple-touch-icon.png",
          revision: "cda109ac73482c9cefb9c17d2a12e450",
        },
        {
          url: "/icons/favicon-16x16.png",
          revision: "4eb0f4243354a3c5ea11080b3a13b3e5",
        },
        {
          url: "/icons/favicon-32x32.png",
          revision: "76ad595d94ff76e27e199e17a9a96ecf",
        },
        { url: "/manifest.json", revision: "4fffef7c71748840a7c365d7770603c4" },
        { url: "/robots.txt", revision: "f77c87f977e0fcce05a6df46c885a129" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: n,
              state: a,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    );
});
