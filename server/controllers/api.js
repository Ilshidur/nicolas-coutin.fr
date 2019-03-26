const aws = require('aws-sdk');
const express = require('express');
const nodemailer = require('nodemailer');
const reCAPTCHA = require('recaptcha2');
const util = require('util');
const validator = require('validator');

const config = require('../config');

const router = express.Router();

const recaptcha = new reCAPTCHA({
  siteKey: config.recaptcha.key,
  secretKey: config.recaptcha.secret
});

// AWS credentials are loaded from env vars.
// See : https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-environment.html
const transport = nodemailer.createTransport({
  SES: new aws.SES({
    apiVersion: '2010-12-01',
    region: 'eu-west-1'
  })
});

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
    from: config.myEmail, // TODO: Use `bot@nicolas-coutin.com`
    to: config.myEmail,
    subject: `Message from ${name} <${email}> (nicolas-coutin.com) via AWS SES`,
    text: content,
    replyTo: email
  };

  try {
    await transport.sendMail(mailOpts);
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

  console.log(`Email sent from : ${config.myEmail} to ${email}.`);
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
