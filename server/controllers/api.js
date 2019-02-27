const express = require('express');
const nodemailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport');
const reCAPTCHA = require('recaptcha2');
const util = require('util');
const validator = require('validator');
const config = require('../config');

const router = express.Router();

const recaptcha = new reCAPTCHA({
  siteKey: config.recaptcha.key,
  secretKey: config.recaptcha.secret
});
const mailgunAuth = {
  auth: {
    api_key: config.mailgun.apiKey,
    domain: config.mailgun.domain
  }
};

router.post('/email', async (req, res, next) => {
  try {
    await recaptcha.validateRequest(req);
  } catch (errorCodes) {
    const serverError = recaptcha.translateErrors(errorCodes) || 'erreur inconnue';
    console.error(serverError);
    const error = process.env.NODE_ENV === 'production'
    ? 'Erreur du serveur. Veuillez réessayer.'
    : 'Erreur lors de la validation : ' + serverError + '.';
    res.status(500).json({
      message: error
    });
    return;
  }

  const name = (req.body.name || '').trim();
  const email = (req.body.email || '').trim();
  const content = (req.body.content || '').trim();
  if (name === '' || email === '' || content === '') {
    res.status(400).json({
      message: 'Veuillez remplir tous les champs.'
    });
    return;
  }

  if (!validator.isEmail(email)) {
    res.status(400).json({
      message: 'Veuillez saisir une adresse e-mail correcte.'
    });
    return;
  }

  const mailOpts = {
    from: email,
    to: config.myEmail,
    subject: `Message from ${name} <${email}> (nicolas-coutin.com) via Mailgun`,
    text: content,
    replyTo: email
  };
  const smtpTrans = nodemailer.createTransport(mg(mailgunAuth));
  const sendMailAsync = util.promisify(smtpTrans.sendMail.bind(smtpTrans));

  try {
    await sendMailAsync(mailOpts);
  } catch (e) {
    const serverError = e.stack;
    console.error(serverError);
    const error = process.env.NODE_ENV === 'production'
      ? 'Erreur du serveur. Veuillez réessayer.'
      : 'Erreur lors de l\'envoi de l\'email : ' + e.message + '.';
    res.status(500).json({
      message: error
    });
    return;
  }

  console.log(`Email sent from : ${email}.`);
  res.status(200).json({
    message: 'Merci ! Je vous contacterai dès que possible.'
  });
});

router.use((err, req, res, next) => {
  console.error(err.message);
  const message = config.isProduction ? 'Internal server error. Please try again later.' : err.stack;
  res.status(500).send({ message });
});

module.exports = router;
