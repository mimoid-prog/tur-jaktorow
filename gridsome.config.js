module.exports = {
  siteName: "Tur Jaktorów",
  siteUrl: "https://tur-jaktorow.pl",
  plugins: [
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-156522420-5",
      },
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        config: {
          "/aktualnosci": {
            changefreq: "weekly",
            priority: 0.9,
            lastmod: "2020-08-01",
          },
          "/o-klubie": {
            changefreq: "yearly",
            priority: 0.6,
            lastmod: "2020-07-25",
          },
          "/terminarz": {
            changefreq: "weekly",
            priority: 0.8,
            lastmod: "2020-08-01",
          },
          "/informacje": {
            changefreq: "yearly",
            priority: 0.7,
            lastmod: "2020-07-25",
          },
        },
      },
    },
  ],
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  },
};
