'use strict';

const Controller = require('hof').controller;
const Behaviour = require('../../../../../apps/common/behaviours/location');

describe('apps/common/behaviours/location', () => {

  describe('locals', () => {

    let controller;
    let req;
    let res;

    beforeEach(done => {
      req = reqres.req();
      res = reqres.res();

      const LocationController = Behaviour(Controller);
      controller = new LocationController({ template: 'index', route: '/index' });
      controller._configure(req, res, done);
    });

    describe('when the user is outside the uk', () => {

      beforeEach(() => {
        req.form.values['inside-uk'] = 'no';
      });

      it('locals.location is ouside-uk', () => {
        controller.locals(req, res).should.have.property('location')
          .and.deep.equal({'outside-uk': true});
      });

    });

    describe('when the user is inside the uk', () => {

      beforeEach(() => {
        req.form.values['inside-uk'] = 'yes';
      });

      it('locals.location is inside-uk', () => {
        controller.locals(req, res).should.have.property('location')
          .and.deep.equal({'inside-uk': true});
      });

    });

    describe('when the user is neither inside the uk or outside the uk', () => {

      it('locals.location is not-specified', () => {
        controller.locals(req, res).should.have.property('location')
          .and.deep.equal({'not-specified': true});
      });

    });

  });

});
