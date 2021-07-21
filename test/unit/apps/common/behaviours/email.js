'use strict';

const Behaviour = require('../../../../../apps/common/behaviours/email');
const Model = require('../../../../../apps/common/models/email');
const Controller = require('hof').controller;

describe('apps/common/controllers/confirm', () => {

  describe('.saveValues()', () => {

    let controller;
    let req;
    let res;

    beforeEach(done => {
      req = reqres.req({
        session: {
          foo: 'bar'
        }
      });
      res = reqres.res();

      sinon.stub(Model.prototype, 'set');
      sinon.stub(Model.prototype, 'save').yieldsAsync();

      const EmailController = Behaviour(Controller);
      controller = new EmailController({ template: 'index', route: '/index' });
      controller._configure(req, res, done);
    });

    afterEach(() => {
      Model.prototype.set.restore();
      Model.prototype.save.restore();
    });

    it('saves the session data to the a model', done => {
      req.baseUrl = '/collection';
      controller.saveValues(req, res, sandbox(err => {
        expect(err).not.to.be.ok;
        Model.prototype.set.should.have.been.calledWith({ foo: 'bar' });
        Model.prototype.save.should.have.been.called;
      }, done));
    });

    it('sets a template for delivery journey', done => {
      req.baseUrl = '/not-arrived';
      controller.saveValues(req, res, sandbox(err => {
        expect(err).not.to.be.ok;
        Model.prototype.set.should.have.been.calledWith('template', 'delivery');
      }, done));
    });

    it('sets a template for error journey', done => {
      req.baseUrl = '/correct-mistakes';
      controller.saveValues(req, res, sandbox(err => {
        expect(err).not.to.be.ok;
        Model.prototype.set.should.have.been.calledWith('template', 'error');
      }, done));
    });

    it('sets a template for error-triage journey', done => {
      req.baseUrl = '/correct-mistakes';
      req.sessionModel.set('triage', true);
      controller.saveValues(req, res, sandbox(err => {
        expect(err).not.to.be.ok;
        Model.prototype.set.should.have.been.calledWith('template', 'error-triage');
      }, done));
    });

    it('sets a template for lost or stolen inside uk journey', done => {
      req.baseUrl = '/lost-stolen';
      req.sessionModel.set('inside-uk', 'yes');
      controller.saveValues(req, res, sandbox(err => {
        expect(err).not.to.be.ok;
        Model.prototype.set.should.have.been.calledWith('template', 'lost-or-stolen-uk');
      }, done));
    });

    it('sets a template for lost or stolen outside uk journey', done => {
      req.baseUrl = '/lost-stolen';
      req.sessionModel.set('inside-uk', 'no');
      controller.saveValues(req, res, sandbox(err => {
        expect(err).not.to.be.ok;
        Model.prototype.set.should.have.been.calledWith('template', 'lost-or-stolen-abroad');
      }, done));
    });

    it('sets a template for nominate someone else journey', done => {
      req.baseUrl = '/someone-else';
      controller.saveValues(req, res, sandbox(err => {
        expect(err).not.to.be.ok;
        Model.prototype.set.should.have.been.calledWith('template', 'someone-else');
      }, done));
    });

    it('throws an error if its not part of a recognised journey', done => {
      req.baseUrl = '/unrecognised-journey';
      controller.saveValues(req, res, sandbox(err => {
        err.should.be.an('error');
        err.message.should.equal('no service found');
      }, done));
    });

  });

});
