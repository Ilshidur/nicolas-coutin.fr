const path = require('path');

module.exports = {
  isProduction: process.env.NODE_ENV === 'production',

  rootPath: path.normalize(path.join(__dirname, '..')),
  port: process.env.PORT || 3001,

  recaptcha: {
    key: process.env.RECAPTCHA_KEY,
    secret: process.env.RECAPTCHA_SECRET
  },

  mailgun: {
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN
  },

  myEmail: process.env.MY_EMAIL
};
