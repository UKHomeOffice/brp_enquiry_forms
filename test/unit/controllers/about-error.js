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
          get: sinon.stub(),
          unset: sinon.stub()
        }
      };
      res = {};
      callback = sinon.stub();

      Controller.prototype.saveValues = sinon.stub();
      controller = new AboutErrorController({template: 'index'});
    });

    it('removes values that are not checked and have unchecked counterparts', function () {
      req.form.values = {
        'foo-checkbox': '',
        foo: 'bar',
        'baz-checkbox': 'true',
        baz: 'foo'
      };
      controller.saveValues(req, res, callback);

      req.sessionModel.unset.should.have.been.calledWithExactly(['foo-checkbox', 'foo']);
    });

    it('always calls the parent controller saveValues with the arguments', function () {
      controller.saveValues(req, res, callback);

      Controller.prototype.saveValues.should.have.been.calledOnce
        .and.always.have.been.calledWithExactly(req, res, callback);
    });

    it('always calls DateController#format with the request object', function () {
      DateController.prototype.format = sinon.stub();
      controller.saveValues(req, res, callback);

      DateController.prototype.format
        .should.always.have.been.calledWithExactly(req);
    });

  });

  describe('.setNextPage()', function () {

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

      controller = new AboutErrorController({template: 'index'});
    });

    it('redirects to "/conditions-and-length" if and user applied in UK and conditions and length', function () {
      req.form.values['conditions-error-checkbox'] = 'true';
      req.sessionModel.get.withArgs('location-applied').returns('yes');
      controller.setNextPage(req, res, callback);

      controller.options.next.should.equal('/conditions-and-length');
    });

    it('redirects to "/truncated" if first name is more than 30 characters', function () {
      req.form.values['first-name-error-checkbox'] = 'true';
      req.form.values['first-name-error'] = 'foobarbazfoobarbazfoobarbazfoobarbaz';
      controller.setNextPage(req, res, callback);

      controller.options.next.should.equal('/truncated');
      req.sessionModel.set.should.have.been.calledWith('truncated-items', [{id: 'first-name-error'}]);
    });

    it('redirects to "/truncated" if last name is more than 30 characters', function () {
      req.form.values['last-name-error-checkbox'] = 'true';
      req.form.values['last-name-error'] = 'foobarbazfoobarbazfoobarbazfoobarbaz';
      controller.setNextPage(req, res, callback);

      controller.options.next.should.equal('/truncated');
      req.sessionModel.set.should.have.been.calledWith('truncated-items', [{id: 'last-name-error'}]);
    });

    it('redirects to "/truncated" birth place is more than 16 characters', function () {
      req.form.values['birth-place-error-checkbox'] = 'true';
      req.form.values['birth-place-error'] = 'foobarbazfoobarba';
      controller.setNextPage(req, res, callback);

      controller.options.next.should.equal('/truncated');
      req.sessionModel.set.should.have.been.calledWith('truncated-items', [{id: 'birth-place-error'}]);
    });

    it('redirects to "/check-details" if originated from the check details page', function () {
      controller.referrer = 'http://hostname/check-details';
      controller.setNextPage(req, res, callback);

      controller.options.next.should.equal('/check-details');
    });

    it('redirects to user configured next value by default', function () {
      controller.options = {next: '/next'};
      controller.setNextPage(req, res, callback);

      controller.options.next.should.equal('/next');
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
