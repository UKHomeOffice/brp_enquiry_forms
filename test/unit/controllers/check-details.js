'use strict';

var proxyquire = require('proxyquire');

var modelProto = {
  save: sinon.stub(),
  set: sinon.stub()
};
var Model = sinon.stub().returns(modelProto);

var SubmitController = proxyquire('../../../controllers/check-details', {
  '../models/email': Model,
  '../routes/fields': {foo: {}, bar: {}}
});

describe('controllers/check-details', function () {

  describe('.saveValues()', function () {

    var controller;
    var expected = {foo: 'bar'};
    var req = {
      sessionModel: {
        toJSON: sinon.stub().returns(expected)
      },
      originalUrl: '/not-arrived/check-details'
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

    it('sets a template for delivery journey', function () {
      req.originalUrl = '/not-arrived/check-details';
      controller.saveValues(req, res, callback);

      modelProto.set.should.have.been.calledWith('template', 'permit');
    });

    it('sets a template for error journey', function () {
      req.originalUrl = '/correct-mistakes/check-details';
      controller.saveValues(req, res, callback);

      modelProto.set.should.have.been.calledWith('template', 'error');
    });

    it('sets a template for lost or stolen journey', function () {
      req.originalUrl = '/lost-stolen-damaged/check-details';
      controller.saveValues(req, res, callback);

      modelProto.set.should.have.been.calledWith('template', 'lost-or-stolen');
    });

    it('throws an error if its not part of a recognised journey', function () {
      req.originalUrl = '/not-recognised-journey';

      (function () {
        controller.saveValues(req, res, callback);
      }).should.throw('no service found');
    });

  });

});
