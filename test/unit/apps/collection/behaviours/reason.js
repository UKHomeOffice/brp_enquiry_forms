'use strict';

const Behaviour = require('../../../../../apps/collection/behaviours/reason');
const Controller = require('hof-form-controller');

describe('apps/collection/behaviours/reason', () => {

  describe('.locals()', () => {

    let controller;
    let req;
    let res;

    beforeEach(done => {
      req = reqres.req();
      res = reqres.res();

      const ReasonController = Behaviour(Controller);
      controller = new ReasonController({ template: 'index', route: '/index' });
      controller._configure(req, res, done);
    });

    it('returns a value indicating where the permit should have been collected from"', () => {
      req.form.values['collection-where-radio'] = 'Post Office';
      controller.locals(req, res).should.have.property('where').and.deep.equal({'post-office': true});
      req.form.values['collection-where-radio'] = 'Sponsor';
      controller.locals(req, res).should.have.property('where').and.deep.equal({'sponsor': true});
    });

    it('returns a reason indicating why the permit was no collected', () => {
      req.form.values['reason-radio'] = 'under-age';
      controller.locals(req, res).should.have.property('reason').and.deep.equal({'under-age': true});
    });

  });

});
