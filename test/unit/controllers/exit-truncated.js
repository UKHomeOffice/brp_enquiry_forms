'use strict';

var Controller = require('hmpo-form-wizard').Controller;
var ExitTruncationController = require('../../../controllers/exit-truncated');

describe('controllers/exit-truncated', function () {

  beforeEach(function () {
    Controller.prototype.getNextStep = sinon.stub();
  });

  describe('.getValues()', function () {
    var controller;
    var json = {foo: 'bar'};
    var req = {sessionModel: {
      reset: sinon.stub()
    }};
    var res = {};
    var callback = sinon.stub();

    beforeEach(function () {
      controller = new ExitTruncationController({template: 'foo'});
      controller.getValues(req, res, callback);
    });

    it('resets the session', function () {
      req.sessionModel.reset.should.have.been.calledOnce;
    });

    it('responds with null errors', function () {
      callback.should.have.been.calledWith(null);
    });
  });

});
