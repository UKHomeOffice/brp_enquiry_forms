'use strict';

const moment = require('moment');

const Behaviour = require('../../../../../apps/not-arrived/behaviours/letter-received');
const Controller = require('hof').controller;

describe('apps/not-arrived/behaviours/letter-received', () => {
  let controller;
  let req;
  let res;

  beforeEach(done => {
    req = reqres.req();
    res = reqres.res();

    const LetterReceivedController = Behaviour(Controller);
    controller = new LetterReceivedController({ template: 'index', route: '/index' });
    controller._configure(req, res, done);
  });

  describe('validate', () => {
    it('throws a `required` error if a letter has been received, but no other questions are answered', done => {
      req.form.values = {
        received: 'yes',
        'delivery-date': '',
        'no-letter': ''
      };

      controller.validate(req, res, sandbox(err => {
        err['delivery-date'].should.be.an.instanceOf(controller.ValidationError);
        err['delivery-date'].type.should.equal('required');
      }, done));
    });
  });

  describe('saveValues', () => {
    let clock;

    beforeEach(() => {
      // set up a fake "now" for tests which test dates
      const now = moment('2017-07-05T12:00:00Z').valueOf();
      clock = sinon.useFakeTimers(now);

      sinon.stub(Controller.prototype, 'saveValues').yieldsAsync();
    });

    afterEach(() => {
      clock.restore();
      Controller.prototype.saveValues.restore();
    });

    it('calls super saveValues', done => {
      controller.saveValues(req, res, sandbox(() => {
        Controller.prototype.saveValues.should.have.been.calledOnce;
        Controller.prototype.saveValues.should.have.been.calledWith(req, res);
      }, done));
    });

    it('sets range to session if delivery date is within 10 working days of current date', done => {
      req.form.values['delivery-date'] = '2017-06-22';

      controller.saveValues(req, res, sandbox(() => {
        req.sessionModel.get('week-day-range').should.eql({
          weekDaysSince: 9,
          weekDaysUntil: 1
        });
      }, done));
    });

    it('sets next step if delivery date is not within 10 working days of current date', done => {
      req.form.values['delivery-date'] = '2017-06-20';

      controller.saveValues(req, res, sandbox(() => {
        req.form.options.next.should.equal('/same-address');
      }, done));
    });

    it('sets next step if no-delivery date is provided', done => {
      req.form.values['delivery-date'] = '';
      req.form.values['no-letter'] = 'true';

      controller.saveValues(req, res, sandbox(() => {
        req.form.options.next.should.equal('/same-address');
      }, done));
    });
  });
});
