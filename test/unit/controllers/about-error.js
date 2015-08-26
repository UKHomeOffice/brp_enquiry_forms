'use strict';

var AboutErrorController = require('../../../controllers/about-error');
var DateController = require('../../../lib/date-controller');
var Controller = require('../../../lib/base-controller');
var ErrorClass = require('../../../lib/base-error');

describe('controllers/about-error', function () {

  describe('.saveValues()', function () {

    var controller;
    var req;
    var res;
    var callback;

    beforeEach(function () {
      req = {
        form: {
          values: {
          }
        },
        sessionModel: {
          set: sinon.stub(),
          get: sinon.stub()
        }
      };
      res = {};
      callback = sinon.stub();

      Controller.prototype.saveValues = sinon.stub();
      controller = new AboutErrorController({template: 'index'});
    });

    it('calls the parent controller saveValues', function () {
      controller.saveValues(req, res, callback);

      Controller.prototype.saveValues.should.have.been.calledOnce;
      Controller.prototype.saveValues.should.have.been.calledWith(req, res, callback);
    });

    it('calls Date#format', function () {
      DateController.prototype.format = sinon.stub();
      controller.saveValues(req, res, callback);

      DateController.prototype.format.should.have.been.calledWith(req);
    });

    it('redirects to "/conditions-and-length" if conditions is checked and applied in UK', function () {
      req.form.values['conditions-error-checkbox'] = 'true';
      req.sessionModel.get.withArgs('location-applied').returns('yes');
      controller.saveValues(req, res, callback);

      controller.options.next.should.equal('/conditions-and-length');
      Controller.prototype.saveValues.should.have.been.calledWith(req, res, callback);
    });

    it('redirects to "/truncated" if user entered first name is more than 30 characters', function () {
      req.form.values['first-name-error-checkbox'] = 'true';
      req.form.values['first-name-error'] = 'foobarbazfoobarbazfoobarbazfoobarbaz';

      controller.saveValues(req, res, callback);

      controller.options.next.should.equal('/truncated');
      req.sessionModel.set.should.have.been.calledWith('truncated-items', [{id: 'first-name-error'}]);
      Controller.prototype.saveValues.should.have.been.calledWith(req, res, callback);
    });

    it('redirects to "/truncated" if user entered last name is more than 30 characters', function () {
      req.form.values['last-name-error-checkbox'] = 'true';
      req.form.values['last-name-error'] = 'foobarbazfoobarbazfoobarbazfoobarbaz';

      controller.saveValues(req, res, callback);

      controller.options.next.should.equal('/truncated');
      req.sessionModel.set.should.have.been.calledWith('truncated-items', [{id: 'last-name-error'}]);
      Controller.prototype.saveValues.should.have.been.calledWith(req, res, callback);
    });

  });

  describe('.validateField(keyToValidate, req)', function () {

    var controller;
    var req;

    beforeEach(function () {
      req = {form: {values: {}}};
      Controller.prototype.validateField = sinon.stub();
      controller = new AboutErrorController({template: 'index'});
    });

    it('returns undefined when a checkbox is not checked', function () {
      req.form.values['first-name-error-checkbox'] = '';
      req.form.values['first-name-error'] = 'Foo';
      req.form.values['last-name-error-checkbox'] = 'true';

      var result = controller.validateField('first-name-error', req);

      should.equal(result, undefined);
      Controller.prototype.validateField.should.not.have.been.called;
    });

    it('returns an error-selection required error if none are checked', function () {
      req.form.values['first-name-error-checkbox'] = '';
      req.form.values['last-name-error-checkbox'] = '';
      req.form.values['birth-place-error-checkbox'] = '';
      req.form.values['date-of-birth-error-checkbox'] = '';

      var result = controller.validateField('first-name-error', req);

      result.should.be.an.instanceof(ErrorClass);
      result.should.have.property('key').and.equal('error-selection');
      result.should.have.property('type').and.equal('required');

      Controller.prototype.validateField.should.not.have.been.called;
    });

    it('calls Controller#validateField when the checkbox is checked', function () {
      req.form.values['first-name-error-checkbox'] = 'true';
      controller.validateField('first-name-error', req);

      Controller.prototype.validateField.should.have.been.calledWithExactly('first-name-error', req);
    });

    it('calls DateController#validateField when the date checkbox is checked', function () {
      req.form.values['date-of-birth-error-checkbox'] = 'true';
      controller.validateField('date-of-birth-day-error', req);

      Controller.prototype.validateField.should.have.been.calledWithExactly('date-of-birth-day-error', req);
    });

  });

});
