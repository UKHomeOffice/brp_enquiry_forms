'use strict';

var AboutErrorController = require('../../../controllers/about-error');
var Controller = require('hmpo-form-wizard').Controller;

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
        }
      };
      res = {};
      callback = sinon.stub();

      Controller.prototype.saveValues = sinon.stub();
      controller = new AboutErrorController({template: 'index'});
    });

    it('calls the parent controller', function () {
      controller.saveValues(req, res, callback);

      Controller.prototype.saveValues.should.have.been.calledOnce;
      Controller.prototype.saveValues.should.have.been.calledWith(req, res, callback);
    });

    it('adds a new formatted date property to the session when the user enters a date', function () {
      req.form.values['date-of-birth-error-day'] = '01';
      req.form.values['date-of-birth-error-month'] = '11';
      req.form.values['date-of-birth-error-year'] = '1982';

      controller.saveValues(req, res, callback);

      req.form.values['date-of-birth-error-formatted'].should.be.a('string');
    });

    it('formats the date property to GDS style date', function () {
      req.form.values['date-of-birth-error-day'] = '01';
      req.form.values['date-of-birth-error-month'] = '11';
      req.form.values['date-of-birth-error-year'] = '1982';

      controller.saveValues(req, res, callback);

      req.form.values['date-of-birth-error-formatted'].should.equal('1 December 1982');
    });

    it('does not add a formatted date property if user hasnt entered a date', function () {
      controller.saveValues(req, res, callback);

      should.not.exist(req.form.values['date-of-birth-error-formatted']);
    });

    it('sets next page to conditions-and-length if conditions is checked', function () {
      req.form.values['conditions-error-checkbox'] = 'true';
      controller.saveValues(req, res, callback);

      controller.options.next.should.equal('/conditions-and-length');
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

    it('returns undefined when the checkbox is not checked', function () {
      req.form.values['first-name-error-checkbox'] = '';
      req.form.values['first-name-error'] = 'Foo';
      var result = controller.validateField('first-name-error', req);

      should.equal(result, undefined);
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
