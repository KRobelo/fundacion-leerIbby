const path = require('path')
const optimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins'); 
module.exports = {
  
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
 // assetPrefix: 'http://localhost/Public/FundacionLeer',
 // basePath: '/Public/FundacionLeer',
  trailingSlash: true
}