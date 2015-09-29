'use strict';

var SomeoneElseController = require('../../../controllers/someone-else');
var DateController = require('../../../lib/date-controller');

describe('controllers/someone-else', function () {

  var controller;
  var key = '';
  var req = {
    form: {
      values: {
        'arrange-collection-radio': ''
      }
    }
  };

  describe('process', function () {

    beforeEach(function () {
      controller = new SomeoneElseController({template: 'index'});
      DateController.prototype.process = sinon.stub();
    });

    it('uses the someone-else-date key when someone-else is selected', function () {
      req.form.values['arrange-collection-radio'] = 'someone-else';
      controller.process(req);

      controller.dateKey.should.equal('someone-else-date');
    });

    it('uses the change-person-date key when change-person is selected', function () {
      req.form.values['arrange-collection-radio'] = 'change-person';
      controller.process(req);

      controller.dateKey.should.equal('change-person-date');
    });

    it('doesnt use a dateKey if cancel-request is selected', function () {
      req.form.values['arrange-collection-radio'] = 'cancel-request';
      controller.process(req);

      should.equal(controller.dateKey, '');
    });

    it('calls date controller', function () {
      controller.process(req);

      DateController.prototype.process.should.have.been.called;
    });

  });

  describe('validateField', function () {
    beforeEach(function () {
      controller = new SomeoneElseController({template: 'index'});
      controller.dateKey = undefined;
      DateController.prototype.validateField = sinon.stub();
    });

    it('sets required to true if the key is part of someone-else', function () {
      controller.dateKey = 'someone-else-date';
      key = 'someone-else';
      controller.validateField(key, req);

      DateController.prototype.validateField.should.have.been.calledWith(key, req, true);
    });

    it('sets required to true if the key is part of change-person', function () {
      controller.dateKey = 'change-person-date';
      key = 'change-person';
      controller.validateField(key, req);

      DateController.prototype.validateField.should.have.been.calledWith(key, req, true);
    });

    it('set required to false if the key is not part of the dateKey', function () {
      controller.dateKey = 'someone-else-date';
      key = 'change-person';
      controller.validateField(key, req);

      DateController.prototype.validateField.should.have.been.calledWith(key, req, false);
    });
  });

});
