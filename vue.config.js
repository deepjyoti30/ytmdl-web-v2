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
      exclude: [/_redirects/, /^.*map$/, /index.html/],
      swDest: "sw.js",
      runtimeCaching: [
        {
          urlPattern: /\.(?:png|jpg|svg|json|md|js|css)$/,
          handler: "StaleWhileRevalidate"
        }
      ],
      cleanupOutdatedCaches: true
    },
    ignoreUrlParametersMatching: [/./]
  }
};
