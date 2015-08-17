'use strict';

var proxyquire = require('proxyquire');

describe('base-controller', function () {

  var HMPOWizard;
  var Controller;
  var controller;

  beforeEach(function () {
    HMPOWizard = require('hmpo-form-wizard');
  });

  describe('constructor', function () {

    beforeEach(function () {
      HMPOWizard.Controller = sinon.stub();
      HMPOWizard.Controller.prototype.getValues = sinon.stub();

      Controller = proxyquire('../../../lib/base-controller', {
        'hmpo-form-wizard': HMPOWizard
      });
    });

    it('calls the parent constructor', function () {
      controller = new Controller({template: 'foo'});

      HMPOWizard.Controller.should.have.been.called;
    });

  });

  describe('methods', function () {

    beforeEach(function () {
      HMPOWizard.Controller.prototype.getNextStep = sinon.stub();
      Controller = proxyquire('../../../lib/base-controller', {
        'hmpo-form-wizard': HMPOWizard
      });
    });

    describe('.locals()', function () {

      var req = {};
      var res = {};

      beforeEach(function () {
        controller = new Controller({
          template: 'foo'
        });
      });

      it('returns errorLength.single if there is one error', function () {
        controller.getErrors = sinon.stub().returns({foo: true});
        controller.locals(req, res).should.have.property('errorLength')
          .and.deep.equal({
            single: true
          });
      });

      it('returns errorLength.multiple if there is more than one error', function () {
        controller.getErrors = sinon.stub().returns({bar: true, baz: true});
        controller.locals(req, res).should.have.property('errorLength')
          .and.deep.equal({
            multiple: true
          });
      });
    });

    describe('.getValues()', function () {
      var req;
      var res = {};
      var callback;

      beforeEach(function () {
        controller = new Controller({
          template: 'foo'
        });
        req = {
          sessionModel: {
            reset: sinon.stub()
          }
        };
        callback = sinon.stub();
      });

      describe('when there\'s a next step', function () {

        beforeEach(function () {
          controller = new Controller({
            template: 'foo',
          });

          controller.options = {
            next: '/somepage'
          };
          controller.getValues(req, res, callback);
        });

        it('resets the session', function () {
          req.sessionModel.reset.should.not.have.been.called;
        });

      });

      describe('when there\'s no next step', function () {

        beforeEach(function () {
          controller = new Controller({template: 'foo'});
          controller.options = {};
          controller.getValues(req, res, callback);
        });

        it('resets the session', function () {
          req.sessionModel.reset.should.have.been.calledOnce;
        });

      });

      describe('when there\'s no next step but clearSession is false', function () {

        beforeEach(function () {
          controller = new Controller({template: 'foo'});
          controller.options = {
            clearSession: false
          };
          controller.getValues(req, res, callback);
        });

        it('resets the session', function () {
          req.sessionModel.reset.should.not.have.been.calledOnce;
        });

      });

      describe('when clearSession is set', function () {

        beforeEach(function () {
          controller = new Controller({template: 'foo'});
          controller.options = {
            clearSession: true
          };
          controller.getValues(req, res, callback);
        });

        it('resets the session', function () {
          req.sessionModel.reset.should.have.been.calledOnce;
        });

      });

      it('calls the parent controller getValues', function () {
        controller = new Controller({template: 'foo'});
        controller.options = {};
        controller.getValues(req, res, callback);
        HMPOWizard.Controller.prototype.getValues.should.have.been.called;
      });

    });

  });

});
