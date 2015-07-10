'use strict';

var Controller = require('hmpo-form-wizard').Controller;
var SameAddressController = require('../../../controllers/same-address');

describe('controllers/same-address', function () {

  describe('.validateField(key, req)', function () {

    describe('when addresses are not the same', function () {

      var controller;
      var key = 'address-town';
      var req = {
        form: {
          values: {
            'address-match': 'no'
          }
        }
      };

      beforeEach(function () {
        controller = new SameAddressController({template: 'index'});
        controller.validateField(key, req);
      });


      it('validates the address fields', function () {
        Controller.prototype.validateField.should.have.been.calledWith(key, req);
      });

    });

    describe('when address are the same', function () {

      var controller;
      var key = 'address-postcode';
      var req = {
        form: {
          values: {
            'address-match': 'yes'
          }
        }
      };

      beforeEach(function () {
        Controller.prototype.validateField = sinon.stub();
        controller = new SameAddressController({template: 'index'});
        controller.validateField(key, req);
      });

      it('does not validate the address fields', function () {
        should.equal(controller.validateField(key, req), undefined);
      });

    });

  });

});
