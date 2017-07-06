'use strict';

const EmailService = require('../../../../../services/email');
const EmailModel = require('../../../../../apps/common/models/email');

describe('apps/common/models/email', () => {

  describe('.save()', () => {

    let model;

    beforeEach(() => {
      sinon.stub(EmailService, 'send').yieldsAsync();
      model = new EmailModel({
        template: 'test_template',
        email: 'email@email.com',
        subject: 'email subject',
        name: 'dave',
        other: 'data'
      });
    });

    afterEach(() => {
      EmailService.send.restore();
    });

    it('calls the send endpoint on the email service with the model data', done => {

      model.save(sandbox(() => {
        EmailService.send.should.have.been.calledWith({
          template: 'test_template',
          to: 'email@email.com',
          subject: 'email subject',
          dataToSend: {
            email: 'email@email.com',
            name: 'dave',
            other: 'data',
            subject: 'email subject'
          }
        });
      }, done));
    });

  });

});
