'use strict';

var Controller = require('hmpo-form-wizard').Controller;
var ErrorClass = require('hmpo-form-wizard').Error;
var LetterReceivedController = require('../../../controllers/letter-received');
var moment = require('moment');
var dateFormat = 'DD-MM-YYYY';

describe('controllers/letter-received', function () {

  describe('.setErrors(err, req)', function () {

    describe('with delivery date errors', function () {

      var err = {
        'delivery-date-day': {type: 'required'},
        'delivery-date-month': false,
        'delivery-date-year': {type: 'required'}
      };

      var controller;
      var req = {};

      beforeEach(function () {
        Controller.prototype.setErrors = sinon.stub();
        controller = new LetterReceivedController({template: 'index'});
        controller.setErrors(err, req);
      });

      it('sets delivery-date required error with error properties', function () {
        err['delivery-date'].should.be.an.instanceof(ErrorClass);
        err['delivery-date'].should.have.property('key')
          .and.equal('delivery-date');
        err['delivery-date'].should.have.property('type')
          .and.equal('required');
        err['delivery-date'].should.have.property('redirect')
          .and.equal(undefined);
        err['delivery-date'].should.have.property('message');
      });

      it('calls setErrors on the parent controller with arguments', function() {
        Controller.prototype.setErrors.should.have.been.calledWith(err, req);
      });

    });

    describe('with only numeric delivery date errors', function () {

      var err = {
        'delivery-date-day': {type: 'numeric'},
        'delivery-date-month': false,
        'delivery-date-year': {type: 'numeric'}
      };

      var controller;
      var req = {};

      beforeEach(function () {
        Controller.prototype.setErrors = sinon.stub();
        controller = new LetterReceivedController({template: 'index'});
        controller.setErrors(err, req);
      });

      it('sets delivery-date numeric error with error properties', function () {
        err['delivery-date'].should.have.property('type')
          .and.equal('numeric');
      });

      it('calls setErrors on the parent controller with arguments', function() {
        Controller.prototype.setErrors.should.have.been.calledWith(err, req);
      });

    });

    describe('letter not received', function () {

      var err = {
        'delivery-date-day': true,
        'delivery-date-month': false,
        'delivery-date-year': true
      };

      var controller;
      var req = {
        form: {
          values: {
            received: 'no'
          }
        }
      };

      beforeEach(function () {
        Controller.prototype.setErrors = sinon.stub();
        controller = new LetterReceivedController({template: 'index'});
        controller.setErrors(err, req);
      });

      it('deletes all delivery date errors', function () {
        should.not.exist(err['delivery-date']);
        should.not.exist(err['delivery-date-day']);
        should.not.exist(err['delivery-date-month']);
        should.not.exist(err['delivery-date-year']);
      });

      it('calls setErrors on the parent controller with arguments', function() {
        Controller.prototype.setErrors.should.have.been.calledWith(err, req);
      });

    });

  });

  describe('.validateField(key, req)', function () {

    describe('when letter has not been received', function () {

      var controller;
      var key = 'delivery-date-year';
      var req = {
        form: {
          values: {
            received: 'no'
          }
        }
      };

      beforeEach(function () {
        controller = new LetterReceivedController({template: 'index'});
      });


      it('does not validate delivery date values', function () {
        should.equal(controller.validateField(key, req), undefined);
      });

    });

    describe('when letter has been received', function () {

      var controller;
      var key = 'delivery-date-year';
      var req = {
        form: {
          values: {
            received: 'yes'
          }
        }
      };

      beforeEach(function () {
        Controller.prototype.validateField = sinon.stub();
        controller = new LetterReceivedController({template: 'index'});
        controller.validateField(key, req);
      });

      it('calls the validateField method on the parent controller with arguments', function () {
        Controller.prototype.validateField.should.have.been.calledWith(key, req);
      });

    });

    describe('validating delivery-date field', function () {

      var controller;
      var key = 'delivery-date';
      var req = {
        form: {
          values: {
            received: 'yes',
            'delivery-date': undefined
          }
        }
      };

      beforeEach(function () {
        Controller.prototype.validateField = sinon.stub();
        controller = new LetterReceivedController({template: 'index'});
      });

      it('returns future error when date in future', function () {
        req.form.values['delivery-date'] = moment().add(1, 'day').format(dateFormat);
        controller.validateField(key, req).should.be.an.instanceof(ErrorClass);
        controller.validateField(key, req).should.have.property('type')
          .and.equal('future');
      });

      it('returns format error when date format is invalid', function () {
        req.form.values['delivery-date'] = '11-2-2015';
        controller.validateField(key, req).should.be.an.instanceof(ErrorClass);
        controller.validateField(key, req).should.have.property('type')
          .and.equal('format');
      });

    });

  });

  describe('.process(req, res, callback)', function () {

    describe('all date parts', function () {

      var controller;
      var req = {
        form: {
          values: {
            'delivery-date': '',
            'delivery-date-day': '01',
            'delivery-date-month': '01',
            'delivery-date-year': '2015'
          }
        }
      };
      var callback = sinon.stub();

      beforeEach(function () {
        controller = new LetterReceivedController({template: 'index'});
        controller.process(req, {}, callback);
      });

      it('creates a formatted delivery-date', function () {
        req.form.values['delivery-date'].should.equal('01-01-2015');
      });

      it('calls the callback', function () {
        callback.should.have.been.called;
      });

    });

    describe('missing delivery date day', function () {

      var controller;
      var req = {
        form: {
          values: {
            'delivery-date': '',
            'delivery-date-day': '',
            'delivery-date-month': '01',
            'delivery-date-year': '2015'
          }
        }
      };
      var callback = sinon.stub();

      beforeEach(function () {
        controller = new LetterReceivedController({template: 'index'});
        controller.process(req, {}, callback);
      });

      it('will not create delivery-date', function () {
        req.form.values['delivery-date'].should.equal('');
      });

      it('calls the callback', function () {
        callback.should.have.been.called;
      });

    });

  });

});
