'use strict';

const Behaviour = require('../../../../../apps/correct-mistakes/behaviours/truncated');
const Controller = require('hof').controller;

describe('apps/correct-mistakes/behaviours/truncated', () => {

  let controller;
  let req;
  let res;

  beforeEach(done => {
    req = reqres.req();
    res = reqres.res();

    req.sessionModel.set('truncated-items', [{id: 'item-one'}, {id: 'item-two'}]);

    const TruncatedController = Behaviour(Controller);
    controller = new TruncatedController({ template: 'index', route: '/index' });
    controller._configure(req, res, done);
  });

  describe('.saveValues()', () => {

    beforeEach(() => {
      sinon.stub(Controller.prototype, 'saveValues').yieldsAsync();
    });
    afterEach(() => {
      Controller.prototype.saveValues.restore();
    });

    it('always calls saveValues on the parent controller with exact arguments', done => {
      controller.saveValues(req, res, sandbox(() => {
        Controller.prototype.saveValues.should.have.been.calledOnce;
        Controller.prototype.saveValues.should.have.been.calledWith(req, res);
      }, done));
    });

    it('updates the truncated-items', done => {
      req.form.values = {
        'truncation-page': 'item-one',
         truncated: 'no'
      };
      controller.saveValues(req, res, sandbox(() => {
        req.sessionModel.get('truncated-items').should.eql([{id: 'item-one', value: 'no'}, {id: 'item-two'}]);
      }, done));
    });

    it('redirects to the exit page if "yes" is selected for all truncated-items', done => {
      req.form.values = {
        'truncation-page': 'item-one',
         truncated: 'yes'
      };
      controller.saveValues(req, res, () => {
        req.form.values = {
          'truncation-page': 'item-two',
           truncated: 'yes'
        };

        controller.saveValues(req, res, sandbox(() => {
          req.form.options.next.should.equal('/exit-truncated');
        }, done));
      });
    });

    it('redirects to the next page if "no" is selected for any truncated-items', done => {
      req.form.values = {
        'truncation-page': 'item-one',
         truncated: 'yes'
      };
      controller.saveValues(req, res, () => {
        req.form.values = {
          'truncation-page': 'item-two',
           truncated: 'no'
        };

        controller.saveValues(req, res, sandbox(() => {
          req.form.options.next.should.equal('/uk-address');
        }, done));
      });
    });

    it('redirects to the truncate page if any item has not been selected', done => {
      req.form.values = {
        'truncation-page': 'item-one',
         truncated: 'yes'
      };
      controller.saveValues(req, res, () => {
        req.form.values = {
          'truncation-page': 'item-two'
        };

        controller.saveValues(req, res, sandbox(() => {
          req.form.options.next.should.equal('/truncated');
        }, done));
      });
    });
  });

  describe('.locals()', () => {

    it('includes a truncatedItem entity', () => {
      req.form.values['item-one'] = 'foofoofoofoofoofoofoofoofoomaxfoo';

      controller.locals(req, res).should.have.property('truncatedItem');
    });

    it('includes a pretty version of the truncatedItem id', () => {
      req.form.values['item-one'] = 'foofoofoofoofoofoofoofoofoomaxfoo';
      var locals = controller.locals(req, res);

      locals.truncatedItem.id.should.equal('item-one');
      locals.truncatedItem.pretty.should.equal('item one');
    });

    it('includes the original length of the truncatedItem value', () => {
      req.form.values['item-one'] = 'foofoofoofoofoofoofoofoofoomaxfoo';
      var locals = controller.locals(req, res);

      locals.truncatedItem.length.should.equal(33);
    });

    it('includes the original value of the truncatedItem', () => {
      req.form.values['item-one'] = 'foofoofoofoofoofoofoofoofoomaxfoo';
      var locals = controller.locals(req, res);

      locals.truncatedItem.value.should.equal('foofoofoofoofoofoofoofoofoomaxfoo');
    });

    it('includes the truncated value of the truncatedItem', () => {
      req.form.values['item-one'] = 'foofoofoofoofoofoofoofoofoomaxfoo';
      var locals = controller.locals(req, res);

      locals.truncatedItem.slice.should.equal('foofoofoofoofoofoofoofoofoomax');
    });
  });
});
