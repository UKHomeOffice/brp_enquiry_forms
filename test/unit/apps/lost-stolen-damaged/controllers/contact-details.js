'use strict';

var proxyquire = require('proxyquire');
var Controller = sinon.stub();
Controller.prototype.locals = sinon.stub().returns({foo: 'bar'});
Controller.prototype.getNextStep = sinon.stub();
var ContactDetailsController = proxyquire('../../../../../apps/lost-stolen-damaged/controllers/contact-details', {
  'hof': {
    controllers: {
      base: Controller
    }
  }
});

describe('apps/lost-stolen-damaged/controllers/contact-details', function () {

  describe('instantiated', function () {

    it('calls Controller with the arguments', function () {
      var args = {template: 'index'};
      /*eslint no-new: 0*/
      new ContactDetailsController(args);

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
      controller = new ContactDetailsController(args);
    });

    it('extends form the parent controller', function () {
      controller.locals(req, res).should.have.property('foo').and.equal('bar');
    });

    it('returns a value indicating whether the person is in the UK"', function () {
      req.form.values['inside-uk'] = 'yes';
      controller.locals(req, res).should.have.property('insideUk').and.deep.equal(true);
      req.form.values['inside-uk'] = 'no';
      controller.locals(req, res).should.not.have.property('insideUk');
    });

  });

});
