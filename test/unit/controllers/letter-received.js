'use strict';

var DateController = require('../../../lib/date-controller');
var LetterReceivedController = require('../../../controllers/letter-received');

describe('controllers/letter-received', function () {

  describe('.validateField(key, req)', function () {

    describe('when letter has not been received', function () {

      var controller;
      var key = 'delivery-date-year';
      var req = {
        form: {
          values: {
            received: 'no'
          }
        }
      };

      beforeEach(function () {
        controller = new LetterReceivedController({template: 'index'});
      });


      it('does not validate delivery date values', function () {
        should.equal(controller.validateField(key, req), undefined);
      });

    });

    describe('when letter has been received', function () {

      var controller;
      var key = 'delivery-date-year';
      var req = {
        form: {
          values: {
            received: 'yes'
          }
        }
      };

      beforeEach(function () {
        DateController.prototype.validateField = sinon.stub();
        controller = new LetterReceivedController({template: 'index'});
      });

      describe('when user knows date on letter', function () {

        it('calls the validateField method on the parent controller with arguments', function () {
          controller.validateField(key, req);

          DateController.prototype.validateField.should.have.been.calledWith(key, req);
        });

      });

      describe('when user doesnt have letter anymore', function () {

        it('does not validate delivery date values', function () {
          req.form.values['no-letter'] = 'true';
          controller.validateField(key, req);

          should.equal(controller.validateField(key, req), undefined);
        });

      });

    });

  });

});
