'use strict';

var proxyquire = require('proxyquire');

var DateController = function () {
  this.options = {};
};
DateController.prototype.saveValues = sinon.stub();

var LetterReceivedController = proxyquire('../../../../../apps/not-arrived/controllers/letter-received', {
  'hof': {
    controllers: {
      date: DateController
    }
  }
});
var moment = require('moment');

describe('controllers/letter-received', function () {

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
    var res = {
      redirect: function () {}
    };

    beforeEach(function () {
      controller = new LetterReceivedController({template: 'index'});
    });

    it('does not validate delivery date values', function () {
      should.equal(controller.validateField(key, req), undefined);
    });

    it('delegates to date controller to redirect', function () {
      controller.saveValues(req, res);
      should.equal(controller.options.next, '/same-address');
    });

  });

  describe('when letter has been received', function () {

    var controller;
    var key = 'delivery-date-year';
    var req = {
      sessionModel: {
        set: function () {}
      },
      form: {
        values: {
          received: 'yes'
        }
      }
    };
    var res = {};
    var callback = function () {};

    beforeEach(function () {
      DateController.prototype.validateField = sinon.stub();
      controller = new LetterReceivedController({template: 'index'});
    });

    describe('when user knows date on letter', function () {

      it('calls the validateField method on the parent controller with arguments', function () {
        controller.validateField(key, req);
        DateController.prototype.validateField.should.have.been.calledWith(key, req);
      });

      it('delegates to the date controller to redirect', function () {
        controller.saveValues(req, res);
        should.equal(controller.options.next, '/same-address');
      });

      it('calls the parent controllers\' saveValues with the arguments', function () {
        controller.saveValues(req, res, callback);
        DateController.prototype.saveValues.should.have.been.calledWith(req, res, callback);
      });

    });

    describe('when date on letter is within 10 days', function () {

      it('redirects user to /on-the-way', function () {
        req.form.values['delivery-date'] = moment().subtractWeekDays(7).add(1, 'days');
        req.sessionModel.set = sinon.stub();

        controller.saveValues(req);

        controller.options.next.should.equal('/on-the-way');
      });

      it('sets the week-day-range properties on the sessionModel', function () {
        req.form.values['delivery-date'] = moment().subtractWeekDays(7).add(1, 'days');
        req.sessionModel.set = sinon.stub();

        controller.saveValues(req);

        req.sessionModel.set.should.have.been.calledWith('week-day-range', {
          weekDaysSince: 6, weekDaysUntil: 4
        });
      });

    });

    describe('when user doesn\'t have letter anymore', function () {

      it('does not validate delivery date values', function () {
        req.form.values['no-letter'] = 'true';
        controller.validateField(key, req);

        should.equal(controller.validateField(key, req), undefined);
      });

    });

  });

});


