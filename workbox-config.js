module.exports = {
  globDirectory: "dist/",
  globPatterns: ["**/*.{ico,png,svg,html,js,css,json,txt,md}"],
  swDest: "dist/sw.js",
  runtimeCaching: [
    {
      urlPattern: /\.(?:png|jpg|svg|json|md|js|css|html)$/,
      handler: "StaleWhileRevalidate"
    }
  ],
  globIgnores: ["**/index.html"],
  navigateFallback: "index.html",
  cleanupOutdatedCaches: true
};
