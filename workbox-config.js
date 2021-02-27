module.exports = {
  globDirectory: "dist/",
  globPatterns: ["**/*.{ico,png,svg,html,js,css,json,txt,md}"],
  swDest: "dist/sw.js",
  skipWaiting: true,
  runtimeCaching: [
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg|json|md|js|css|html)$/,
      handler: "StaleWhileRevalidate"
    }
  ]
};
