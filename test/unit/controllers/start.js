'use strict';

var StartController = require('../../../controllers/start');

describe('controllers/start', function () {

  describe('.saveValues()', function () {

    var controller;
    var req = {sessionModel: {reset: sinon.stub()}};
    var res = {};
    var callback = sinon.stub();

    beforeEach(function () {
      controller = new StartController({template: 'index'});
      controller.saveValues(req, res, callback);
    });

    it('resets the session', function () {
      req.sessionModel.reset.should.have.been.calledOnce;
      callback.should.have.been.calledOnce;
    });

  });

});
