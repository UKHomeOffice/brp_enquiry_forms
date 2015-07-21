'use strict';

var OnTheWayController = require('../../../controllers/on-the-way');

describe('controllers/on-the-way', function () {

  describe('locals', function () {

    var controller;
    var weekDayRange = {
      weekDaysSince: 6, weekDaysUntil: 4
    };
    var req = {
      sessionModel: {
        get: function () {}
      }
    };
    var res = {};

    beforeEach(function () {
      controller = new OnTheWayController({template: 'index'});
      req.sessionModel.get = sinon.stub().withArgs('week-day-range').returns(weekDayRange);
    });

    it('include the week-day-range properties', function () {
      var locals = controller.locals(req, res);

      locals.should.have.property('weekDayRange')
        .and.deep.equal({
          weekDaysSince: 6, weekDaysUntil: 4
        });
    });

  });

});


