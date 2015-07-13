'use strict';

var Controller = require('hmpo-form-wizard').Controller;
var ContactDetailsController = require('../../../controllers/contact-details');

describe('controllers/contact-details', function () {

  describe('when the user does not have an email address', function () {

    var req = {
      form: {
        values: {
          'no-email': 'true'
        }
      }
    };

    it('the address fields but not the email address are validated', function () {

      Controller.prototype.validateField = sinon.stub();

      ContactDetailsController.prototype.validateField('email', req);
      Controller.prototype.validateField.should.not.have.been.called;

      ContactDetailsController.prototype.validateField('address-street', req);
      Controller.prototype.validateField.should.have.been.calledWithExactly('address-street', req);

      ContactDetailsController.prototype.validateField('address-town', req);
      Controller.prototype.validateField.should.have.been.called.calledWithExactly('address-town', req);

      ContactDetailsController.prototype.validateField('address-postcode', req);
      Controller.prototype.validateField.should.have.been.called.calledWithExactly('address-postcode', req);

    });

  });

  describe('when the user does have an email address', function () {

    var req = {
      form: {
        values: {
          'no-email': ''
        }
      }
    };

    beforeEach(function () {
      Controller.prototype.validateField = sinon.stub();
    });

    it('the email address is validated', function () {
      ContactDetailsController.prototype.validateField('email', req);
      Controller.prototype.validateField.should.have.been.calledWithExactly('email', req);
    });

    it('the address fields are not validated', function () {
      ContactDetailsController.prototype.validateField('address-street', req);
      Controller.prototype.validateField.should.not.have.been.called;

      ContactDetailsController.prototype.validateField('address-town', req);
      Controller.prototype.validateField.should.not.have.been.called;

      ContactDetailsController.prototype.validateField('address-postcode', req);
      Controller.prototype.validateField.should.not.have.been.called;
    });

  });

});
