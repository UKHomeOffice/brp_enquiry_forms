'use strict';

const { expect } = require('chai');
const Controller = require('hof').controller;

describe('apps/common/controllers/confirm', () => {
  describe('.saveValues()', () => {
    let controller;
    let req;
    let res;
    let Behaviour;
    let setStub;
    let saveStub;
    let constructorStub;

    beforeEach(done => {
      constructorStub = sinon.stub();
      setStub = sinon.stub();
      saveStub = sinon.stub();

      Behaviour = proxyquire('../apps/common/behaviours/email', {
        '../models/email': constructorStub.returns({
          set: setStub,
          save: saveStub.yieldsAsync()
        }),
        'hot-shots': sinon.stub().returns({ increment: sinon.stub() }),
        nanoid: {
          customAlphabet: sinon.stub().returns(function () { return 'fpgyxSgw7'; })
        }
      });

      req = reqres.req({
        session: {
          foo: 'bar'
        }
      });
      res = reqres.res();

      const EmailController = Behaviour(Controller);
      controller = new EmailController({ template: 'index', route: '/index' });
      controller._configure(req, res, done);
    });

    it('saves the session data to the a model', () => {
      req.baseUrl = '/collection';
      controller.saveValues(req, res, err => {
        expect(err).not.to.be.ok;
        constructorStub.should.have.been.calledWith({ foo: 'bar', 'is-resubmission': false });
        saveStub.should.have.been.called;
      });
    });

    it('sets a template for delivery journey', () => {
      req.baseUrl = '/not-arrived';
      controller.saveValues(req, res, err => {
        expect(err).not.to.be.ok;
        setStub.should.have.been.calledWith('template', 'delivery');
      });
    });

    it('sets a template for error journey', () => {
      req.baseUrl = '/correct-mistakes';
      controller.saveValues(req, res, err => {
        expect(err).not.to.be.ok;
        setStub.should.have.been.calledWith('template', 'error');
      });
    });

    it('sets a template for error-triage journey', () => {
      req.baseUrl = '/correct-mistakes';
      req.sessionModel.set('triage', true);
      controller.saveValues(req, res, err => {
        expect(err).not.to.be.ok;
        setStub.should.have.been.calledWith('template', 'error-triage');
      });
    });

    it('sets a template for lost or stolen inside uk journey', () => {
      req.baseUrl = '/lost-stolen';
      req.sessionModel.set('inside-uk', 'yes');
      controller.saveValues(req, res, err => {
        expect(err).not.to.be.ok;
        setStub.should.have.been.calledWith('template', 'lost-or-stolen-uk');
      });
    });

    it('sets a template for lost or stolen outside uk journey', () => {
      req.baseUrl = '/lost-stolen';
      req.sessionModel.set('inside-uk', 'no');
      controller.saveValues(req, res, err => {
        expect(err).not.to.be.ok;
        setStub.should.have.been.calledWith('template', 'lost-or-stolen-abroad');
      });
    });

    it('sets a template for nominate someone else journey', () => {
      req.baseUrl = '/someone-else';
      controller.saveValues(req, res, err => {
        expect(err).not.to.be.ok;
        setStub.should.have.been.calledWith('template', 'someone-else');
      });
    });

    it('sets errors in the subject for the correct mistakes journey', () => {
      req.baseUrl = '/correct-mistakes';
      req.sessionModel.set('test-error-checkbox', 'true');
      req.sessionModel.set('test-error', 'testerror');
      req.sessionModel.set('submission-reference', 'fpgyxSgw7');
      controller.saveValues(req, res, err => {
        expect(err).not.to.be.ok;
        setStub.should.have.been.calledWith('subject',
          'Form submitted: Report a problem with your new BRP (test-error)');
      });
    });

    it('throws an error if its not part of a recognised journey', () => {
      req.baseUrl = '/unrecognised-journey';
      controller.saveValues(req, res, err => {
        err.should.be.an('error');
        err.message.should.equal('no service found');
      });
    });

    it('correctly marks an email as a resubmission with the correct reference '
      + 'in the email subject when a reference is supplied', () => {
      req.baseUrl = '/collection';
      req.sessionModel.set('previous-submission', 'yes');
      req.sessionModel.set('submission-reference', '123456');

      controller.saveValues(() => {
        setStub.should.have.been.calledWith('subject',
          'Form submitted: Report a collection problem. Ref: 123456');
        constructorStub.should.have.been.calledWith({
          foo: 'bar',
          'previous-submission': 'yes',
          'submission-reference': '123456',
          'is-resubmission': true
        });
      });
    });

    it('correctly marks an email as a resubmission with a new random reference in '
      + 'the email subject when a previous reference is not supplied', () => {
      req.baseUrl = '/collection';
      req.sessionModel.set('previous-submission', 'yes');

      controller.saveValues(() => {
        setStub.should.have.been.calledWith('subject',
          'Form submitted: Report a collection problem. Ref: fpgyxSgw7');
        constructorStub.should.have.been.calledWith({
          foo: 'bar',
          'previous-submission': 'yes',
          'is-resubmission': true
        });
      });
    });

    it('correctly marks an email as a not a resubmission with a new random reference in the email subject', () => {
      req.baseUrl = '/collection';
      req.sessionModel.set('previous-submission', 'no');

      controller.saveValues(() => {
        setStub.should.have.been.calledWith('subject',
          'Form submitted: Report a collection problem. Ref: fpgyxSgw7');
        constructorStub.should.have.been.calledWith({
          foo: 'bar',
          'previous-submission': 'no',
          'is-resubmission': false
        });
      });
    });
  });
});
