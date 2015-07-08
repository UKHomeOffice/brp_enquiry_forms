'use strict';

var Controller = require('hmpo-form-wizard').Controller;
var ErrorClass = require('hmpo-form-wizard').Error;
var LetterReceivedController = require('../../../controllers/letter-received');

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

  });

});
