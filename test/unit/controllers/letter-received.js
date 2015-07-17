'use strict';

var Controller = require('hmpo-form-wizard').Controller;
var DateController = require('../../../lib/date-controller');
var LetterReceivedController = require('../../../controllers/letter-received');

describe('controllers/letter-received', function () {

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
    var res = {
      redirect: function () {}
    };

    beforeEach(function () {
      controller = new LetterReceivedController({template: 'index'});
    });

    it('does not validate delivery date values', function () {
      should.equal(controller.validateField(key, req), undefined);
    });

    it('redirects user to /letter-not-received', function () {
      res.redirect = sinon.stub();
      controller.saveValues(req, res);

      res.redirect.should.have.been.calledWith('letter-not-received');
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
    var res = {};
    var callback = function () {};

    beforeEach(function () {
      DateController.prototype.validateField = sinon.stub();
      controller = new LetterReceivedController({template: 'index'});
    });

    describe('when user knows date on letter', function () {

      it('calls the validateField method on the parent controller with arguments', function () {
        controller.validateField(key, req);

        DateController.prototype.validateField.should.have.been.calledWith(key, req);
      });

      it('calls the parent controllers\' saveValues with the arguments', function () {
        controller.saveValues(req, res, callback);

        Controller.prototype.saveValues.should.have.been.calledWith(req, res, callback);
      });

    });

    describe('when user doesn\'t have letter anymore', function () {

      it('does not validate delivery date values', function () {
        req.form.values['no-letter'] = 'true';
        controller.validateField(key, req);

        should.equal(controller.validateField(key, req), undefined);
      });

    });

  });

});


