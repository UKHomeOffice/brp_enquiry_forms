'use strict';

/* eslint no-process-env: 0*/
/* eslint no-inline-comments: 0*/
/* eslint camelcase: 0*/
module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  listen_host: process.env.LISTEN_HOST,
  gaTag: process.env.GA_TAG || false,
  session: {
    secret: process.env.SESSION_SECRET,
    ttl: process.env.SESSION_TTL
  },
  redis: {
    password: process.env.REDIS_PASSWORD
  },
  email: {
    caseworker: {
      error: process.env.CASEWORKER_ERROR_EMAIL,
      'error-triage': process.env.CASEWORKER_ERROR_TRIAGE_EMAIL,
      'lost-or-stolen-uk': process.env.CASEWORKER_LOSTSTOLEN_EMAIL,
      'lost-or-stolen-abroad': process.env.CASEWORKER_LOSTSTOLEN_EMAIL,
      delivery: process.env.CASEWORKER_DELIVERY_EMAIL,
      collection: process.env.CASEWORKER_COLLECTION_EMAIL,
      'someone-else': process.env.CASEWORKER_SOMEONEELSE_EMAIL
    },
    'integration-email-recipient': process.env.INTEGRATION_EMAIL_RECIPIENT,
    port: process.env.EMAIL_PORT,
    host: process.env.EMAIL_HOST,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
    },
    aws: {
      region: process.env.AWS_REGION,
      accessKeyId: process.env.AWS_USER,
      secretAccessKey: process.env.AWS_PASSWORD
    },
    from: process.env.FROM_ADDRESS,
    ignoreTLS: process.env.EMAIL_IGNORE_TLS === 'true',
    secure: process.env.EMAIL_SECURE === 'true'
  },
  hosts: {
    acceptanceTests: process.env.ACCEPTANCE_HOST_NAME || `http://localhost:${process.env.PORT || 8080}`
  },
  govukLandingPageUrl: new URL('https://www.gov.uk/biometric-residence-permits'),
  feedbackUrl: process.env.FEEDBACK_URL
};
