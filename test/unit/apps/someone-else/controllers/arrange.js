'use strict';

var ArrangeController = require('../../../../../apps/someone-else/controllers/arrange');
var Parent = require('hof').controllers.base;

describe('apps/someone-else/controllers/arrange', function () {

  var controller;
  var req;

  describe('process', function () {

    beforeEach(function () {
      req = {
        form: {
          values: {
            'arrange-collection-radio': '',
            'someone-else-date-day': '',
            'someone-else-date-month': '',
            'change-person-date-day': '',
            'change-person-date-month': ''
          }
        }
      };
      controller = new ArrangeController({template: 'index'});
      Parent.prototype.process = sinon.stub();
    });

    describe('someone-else selected', function () {
      beforeEach(function () {
        req.form.values['arrange-collection-radio'] = 'someone-else';
        controller.process(req);
      });

      it('sets the correct options.next', function () {
        controller.options.next.should.equal('/reason');
      });

      it('adds a nominating flag to the session', function () {
        req.form.values.nominating.should.equal('Nominate');
      });
    });

    describe('change-person selected', function () {
      beforeEach(function () {
        req.form.values['arrange-collection-radio'] = 'change-person';
        controller.process(req);
      });

      it('sets the correct options.next', function () {
        controller.options.next.should.equal('/personal-details-no-reason');
      });

      it('adds a no-reason flag to the session', function () {
        req.form.values['no-reason'].should.equal(true);
      });

      it('adds a nominating flag to the session', function () {
        req.form.values.nominating.should.equal('Change');
      });
    });


    describe('cancel-request selected', function () {
      beforeEach(function () {
        req.form.values['arrange-collection-radio'] = 'cancel-request';
        controller.process(req);
      });

      it('sets the correct options.next', function () {
        controller.options.next.should.equal('/exit-cancel-request');
      });
    });

    it('calls parent controller', function () {
      controller.process(req);

      Parent.prototype.process.should.have.been.called;
    });

  });

});
