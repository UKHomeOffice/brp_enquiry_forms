'use strict';

var proxyquire = require('proxyquire');

var modelProto = {
  save: sinon.stub()
};
var Model = sinon.stub().returns(modelProto);

var SubmitController = proxyquire('../../../controllers/check-details', {
  '../models/submit': Model,
  '../routes/fields': {foo: {}, bar: {}}
});

describe('controllers/check-details', function () {

  describe('.saveValues()', function () {

    var controller;
    var expected = {foo: 'bar'};
    var req = {
      sessionModel: {
        toJSON: sinon.stub().returns(expected)
      }
    };
    var res = {};
    var callback = sinon.stub();

    beforeEach(function () {
      controller = new SubmitController({template: 'index'});
      controller.saveValues(req, res, callback);
    });

    it('saves the session data to the a model', function () {
      Model.should.have.been.calledWith(expected);
      modelProto.save.should.have.been.calledWith(callback);
    });

  });

});
