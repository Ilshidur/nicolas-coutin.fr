const path = require('path');

const port = process.env.PORT || 3001;

module.exports = {
  isProduction: process.env.NODE_ENV === 'production',

  rootPath: path.normalize(path.join(__dirname, '..')),
  port: port,
  siteDomain: process.env.DOMAIN || ('http://lvh.me:' + port),

  recaptcha: {
    key: process.env.RECAPTCHA_KEY,
    secret: process.env.RECAPTCHA_SECRET
  },

  myEmail: process.env.MY_EMAIL
};
