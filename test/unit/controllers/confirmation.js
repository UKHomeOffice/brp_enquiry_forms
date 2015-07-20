'use strict';

var Controller = require('hmpo-form-wizard').Controller;
var ConfirmationController = require('../../../controllers/confirmation');

describe('controllers/confirmation', function () {

  beforeEach(function () {
    Controller.prototype.getNextStep = sinon.stub();
  });

  describe('.getValues()', function () {
    var controller;
    var req = {sessionModel: {reset: sinon.stub()}};
    var res = {};
    var callback = sinon.stub();

    beforeEach(function () {
      controller = new ConfirmationController({template: 'foo'});
      controller.getValues(req, res, callback);
    });

    it('resets the session', function () {
      req.sessionModel.reset.should.have.been.calledOnce;
      callback.should.have.been.calledOnce;
    });
  });

  describe('when the user is outside the uk', function () {

    var req = {
      form: {
        values: {
          'inside-uk': 'no'
        }
      }
    };
    var res = {};
    var controller;

    beforeEach(function () {
      controller = new ConfirmationController({template: 'foo'});
    });

    it('locals.location is ouside-uk', function () {
      var preparedLocals = controller.locals(req, res);

      preparedLocals.should.have.property('location')
        .and.deep.equal({'outside-uk': true});

    });

  });

  describe('when the user is inside the uk', function () {

    var req = {
      form: {
        values: {
          'inside-uk': 'yes'
        }
      }
    };
    var res = {};
    var controller;

    beforeEach(function () {
      controller = new ConfirmationController({template: 'foo'});
    });

    it('locals.location is inside-uk', function () {
      var preparedLocals = controller.locals(req, res);

      preparedLocals.should.have.property('location')
        .and.deep.equal({'inside-uk': true});

    });

  });

  describe('when the user is neither inside the uk or outside the uk', function () {

    var req = {
      form: {
        values: {}
      }
    };
    var res = {};
    var controller;

    beforeEach(function () {
      controller = new ConfirmationController({template: 'foo'});
    });

    it('locals.location is not-specified', function () {
      var preparedLocals = controller.locals(req, res);

      preparedLocals.should.have.property('location')
        .and.deep.equal({'not-specified': true});

    });

  });

});
