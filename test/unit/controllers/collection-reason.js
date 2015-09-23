'use strict';

var proxyquire = require('proxyquire');
var Controller = sinon.stub();
Controller.prototype.locals = sinon.stub().returns({foo: 'bar'});
Controller.prototype.getNextStep = sinon.stub();
var CollectionReasonController = proxyquire('../../../controllers/collection-reason', {
  '../lib/base-controller': Controller
});

describe('controllers/collection-reason', function () {

  describe('instantiated', function () {


    it('calls Controller with the arguments', function () {
      var args = {template: 'index'};
      /*eslint no-new: 0*/
      new CollectionReasonController(args);

      Controller.should.have.been.calledWith(args);
    });
  });

  describe('.locals()', function () {

    var controller;
    var args = {template: 'index'};
    var req = {
      form: {
        values: {}
      }
    };
    var res = {};

    beforeEach(function () {
      controller = new CollectionReasonController(args);
    });

    it('returns extends the parents\' locals', function () {
      controller.locals(req, res).should.have.property('foo').and.equal('bar');
    });

    it('returns "post-office" when selected', function () {
      req.form.values['collection-where-radio'] = 'Post office';
      controller.locals(req, res).should.have.property('where').and.deep.equal({'post-office': true});
    });

    it('returns "sponsor" when selected', function () {
      req.form.values['collection-where-radio'] = 'Sponsor';
      controller.locals(req, res).should.have.property('where').and.deep.equal({'sponsor': true});
    });

  });

});
