'use strict';

/* eslint no-process-env: 0*/
/* eslint no-inline-comments: 0*/
/* eslint camelcase: 0*/
module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT || 8080,
  listen_host: process.env.LISTEN_HOST || '0.0.0.0',
  gaTag: process.env.GA_TAG || false,
  session: {
    secret: process.env.SESSION_SECRET || 'howdoesyourgardengrow',
    ttl: process.env.SESSION_TTL || 1800 /* 30 mins timeout */
  },
  redis: {
    port: process.env.REDIS_PORT_6379_TCP_PORT || process.env.REDIS_PORT || 6379,
    host: process.env.REDIS_PORT_6379_TCP_ADDR || process.env.REDIS_HOST || '127.0.0.1',
    password: process.env.REDIS_PASSWORD
  },
  email: {
    caseworker: {
      error: process.env.CASEWORKER_ERROR_EMAIL || 'caseworker_email_address@test.com',
      'error-triage': process.env.CASEWORKER_ERROR_TRIAGE_EMAIL || 'triage_email_address@test.com',
      'lost-or-stolen-uk': process.env.CASEWORKER_LOSTSTOLEN_EMAIL || 'caseworker_email_address@test.com',
      'lost-or-stolen-abroad': process.env.CASEWORKER_LOSTSTOLEN_EMAIL || 'caseworker_email_address@test.com',
      delivery: process.env.CASEWORKER_DELIVERY_EMAIL || 'caseworker_email_address@test.com',
      collection: process.env.CASEWORKER_COLLECTION_EMAIL || 'caseworker_email_address@test.com',
      'someone-else': process.env.CASEWORKER_SOMEONEELSE_EMAIL || 'someoneelse_email_address@test.com'
    },
    port: process.env.EMAIL_PORT || 587,
    host: process.env.EMAIL_HOST || 'email-smtp.eu-west-1.amazonaws.com',
    auth: {
      user: process.env.SMTP_USER || '',
      pass: process.env.SMTP_PASSWORD || ''
    },
    aws: {
      region: process.env.AWS_REGION || 'eu-west-1',
      accessKeyId: process.env.AWS_USER || '',
      secretAccessKey: process.env.AWS_PASSWORD || ''
    },
    from: process.env.FROM_ADDRESS || 'brp@dsp.notprod.homeoffice.gov.uk',
    ignoreTLS: process.env.EMAIL_IGNORE_TLS === 'true',
    secure: process.env.EMAIL_SECURE === 'true'
  }
};
