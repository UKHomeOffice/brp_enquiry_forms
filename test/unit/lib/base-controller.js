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
      HMPOWizard.Controller.prototype.locals = sinon.stub().returns({foo: 'bar'});
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

      it('always extends from parent locals', function () {
        controller.getErrors = sinon.stub().returns({foo: true});
        controller.locals(req, res).should.have.property('foo').and.always.equal('bar');
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
        HMPOWizard.Controller.prototype.getValues = sinon.stub();
        Controller.prototype.getErrors = sinon.stub();
        req = {
          sessionModel: {
            reset: sinon.stub()
          },
          header: sinon.stub()
        };
        callback = sinon.stub();
      });

      describe('when there\'s a next step', function () {

        beforeEach(function () {
          controller = new Controller({
            template: 'foo'
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

      it('gets the referer header if there are no errors', function () {
        controller = new Controller({template: 'foo'});
        controller.options = {};
        controller.getValues(req, res, callback);

        req.header.should.have.been.calledOnce
          .and.always.have.been.calledWith('Referer');
      });

      it('does not get the referer header if there are errors', function () {
        controller = new Controller({template: 'foo'});
        controller.options = {};
        controller.getValues(req, res, callback);
        Controller.prototype.getErrors = sinon.stub().returns({error: true});

        req.header.should.have.been.calledOnce
          .and.always.have.been.calledWith('Referer');
      });

      it('always calls the parent controller getValues', function () {
        controller = new Controller({template: 'foo'});
        controller.options = {};
        controller.getValues(req, res, callback);
        HMPOWizard.Controller.prototype.getValues
          .should.always.have.been.calledWithExactly(req, res, callback);
      });

    });

    describe('.saveValues()', function () {
      var res = {};
      var req = {};
      var callback = function () {};

      beforeEach(function () {
        HMPOWizard.Controller.prototype.saveValues = sinon.stub();
        Controller.prototype.setNextPage = sinon.stub();
        controller = new Controller({template: 'foo'});
      });

      it('always calls the setNextPage', function () {
        controller.saveValues(req, res, callback);

        controller.setNextPage
          .should.always.have.been.calledWithExactly(req);
      });

      it('always calls the parent controller saveValues', function () {
        controller.saveValues(req, res, callback);

        HMPOWizard.Controller.prototype.saveValues
          .should.always.have.been.calledWithExactly(req, res, callback);
      });

    });

    describe('.setNextPage()', function () {
      var res = {};
      var req = {};
      var callback = function () {};

      beforeEach(function () {
        controller = new Controller({template: 'foo'});
      });

      describe('when previous GET request originated from /check-details', function () {

        beforeEach(function () {
          controller = new Controller({template: 'foo'});
          controller.options = {next: '/next-page'};
          controller.referrer = 'http://hostname/check-details';
        });

        it('redirects to /check-details', function () {
          controller.setNextPage(req, res, callback);

          controller.options.next.should.equal('/check-details');
        });

      });

    });

  });

});
