module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/scss/app.scss";`
      }
    }
  },
  pwa: {
    name: "Ytmdl",
    start_url: "/",
    workboxOptions: {
      exclude: [/_redirects/, /^.*map$/],
      swDest: "sw.js",
      globDirectory: "dist/",
      globPatterns: ["**/*.{ico,png,svg,html,js,css,json,txt,md}"],
      globIgnores: ["**/index.html"],
      runtimeCaching: [
        {
          urlPattern: /\.(?:png|jpg|svg|json|md|js|css|html)$/,
          handler: "StaleWhileRevalidate"
        }
      ],
      navigateFallback: "index.html",
      cleanupOutdatedCaches: true
    },
    ignoreUrlParametersMatching: [/./]
  }
};
