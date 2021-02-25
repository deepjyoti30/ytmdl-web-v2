module.exports = {
  globDirectory: "dist/",
  globPatterns: ["**/*.{ico,png,svg,html,json,txt,md}"],
  swDest: "dist/sw.js",
  runtimeCaching: [
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg|json|md)$/,
      handler: "StaleWhileRevalidate"
    }
  ]
};
