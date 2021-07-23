'use strict';

const Behaviour = require('../../../../../apps/someone-else/behaviours/personal-details');
const Controller = require('hof').controller;

describe('apps/someone-else/behaviours/personal-details', () => {
  let controller;
  let req;
  let res;

  beforeEach(() => {
    req = reqres.req();
    res = reqres.res();

    req.form.options = {};

    const PersonalDetailsController = Behaviour(Controller);
    controller = new PersonalDetailsController({ template: 'index', route: '/index' });
  });

  describe('configure', () => {
    beforeEach(() => {
      req.form.options.fields = {
        'date-of-birth': {
          validate: ['required']
        }
      };

      sinon.stub(Controller.prototype, 'configure').yieldsAsync();
    });
    afterEach(() => {
      Controller.prototype.configure.restore();
    });

    it('adds an `after` validator to the date of birth field if the reason is `under-age`', done => {
      req.sessionModel.set('someone-else-reason-radio', 'under-age');
      controller.configure(req, res, sandbox(() => {
        req.form.options.fields['date-of-birth'].should.have.property('validate');
        req.form.options.fields['date-of-birth'].validate.should.contain({
          type: 'after',
          arguments: [18, 'years']
        });
      }, done));
    });

    it('does not add an `after` validator to the date of birth field if the reason is not `under-age`', done => {
      req.sessionModel.set('someone-else-reason-radio', 'incapable');
      controller.configure(req, res, sandbox(() => {
        req.form.options.fields['date-of-birth'].should.have.property('validate');
        req.form.options.fields['date-of-birth'].validate.should.not.contain({
          type: 'after',
          arguments: [18, 'years']
        });
      }, done));
    });

    it('can handle there not being any validators on the date-of-birth field', done => {
      req.form.options.fields['date-of-birth'] = {};
      req.sessionModel.set('someone-else-reason-radio', 'under-age');
      controller.configure(req, res, sandbox(() => {
        req.form.options.fields['date-of-birth'].should.have.property('validate');
        req.form.options.fields['date-of-birth'].validate.should.contain({
          type: 'after',
          arguments: [18, 'years']
        });
      }, done));
    });
  });
});
