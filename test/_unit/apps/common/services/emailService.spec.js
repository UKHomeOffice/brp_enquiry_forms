'use strict';

const EmailService = require('../../../../../services/email');
const config = require('../../../../../config');

describe('services/email', () => {
  describe('.getEmailRecipient()', () => {
    it('suffixes the integration email to the caseworker email if configured', () => {
      config.email['integration-email-recipient'] = 'integration@test.com';
      config.email.caseworker.collection = 'caseworker@test.com';
      const email = EmailService.getEmailRecipient({ template: 'collection' });
      email.should.equal('caseworker@test.com,integration@test.com');
    });
  });
});
