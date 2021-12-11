const path = require("path");
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  // assetPrefix: 'http://localhost/Public/FundacionLeer',
  // basePath: '/Public/FundacionLeer',
  trailingSlash: true,
};
