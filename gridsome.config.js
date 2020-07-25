module.exports = {
  siteName: "Tur Jaktorów",
  templates: {
    Posts: "/aktualnosci/:title",
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Posts",
        path: "src/data/posts/*.md",
      },
    },
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
