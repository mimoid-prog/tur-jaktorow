module.exports = {
  siteName: "Tur Jaktorów",
  plugins: [
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-156522420-5",
      },
    },
  ],
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  },
};
