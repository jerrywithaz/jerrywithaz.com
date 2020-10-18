const path = require('path');

const appSrc = path.resolve(__dirname, './src');

module.exports = {
  webpack: {
      alias: {
        '@app/components': `${appSrc}/components/`,
        '@app/theme': `${appSrc}/theme/`,
        '@app/utils': `${appSrc}/utils/`,
        '@app/routes': `${appSrc}/routes`,
        '@app/views': `${appSrc}/views/`,
      }
  }
};