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

  });

});
