'use strict';

const Controller = require('hof').controller;
const Behaviour = require('../../../../../apps/common/behaviours/organisation-details');

describe('apps/common/behaviours/organisation-details', () => {
  describe('locals', () => {
    let controller;
    let req;
    let res;

    beforeEach(done => {
      req = reqres.req();
      res = reqres.res();

      const OrganisationDetailsController = Behaviour(Controller);
      controller = new OrganisationDetailsController({ template: 'index', route: '/index' });
      controller._configure(req, res, done);
    });

    describe('org type group toggled options should be checked if selected', () => {
      it('locals should have sponsorChecked property as true if pbs has been selected', () => {
        req.form.values['org-type'] = 'pbs';
        controller.locals(req, res).should.have.property('sponsorChecked').and.deep.equal(true);
      });
      it('locals should have legalChecked property as true if legal has been selected', () => {
        req.form.values['org-type'] = 'legal';
        controller.locals(req, res).should.have.property('legalChecked').and.deep.equal(true);
      });
      it('locals should have relativeChecked property as true if relative has been selected', () => {
        req.form.values['org-type'] = 'relative';
        controller.locals(req, res).should.have.property('relativeChecked').and.deep.equal(true);
      });
      it('locals should have supportChecked property as true if support has been selected', () => {
        req.form.values['org-type'] = 'support';
        controller.locals(req, res).should.have.property('supportChecked').and.deep.equal(true);
      });
    });
  });
});
