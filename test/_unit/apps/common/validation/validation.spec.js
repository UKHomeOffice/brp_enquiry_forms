'use strict';

const Controller = require('hof').controller;

// We don't need an actual controller, so just create a dummy
const DummyController = class DummyControllerBase extends Controller {
  configure(req, res, next) {
    super.configure(req, res, next);
  }
};

describe('apps/common/validation', () => {
  let controller;
  let req;
  let res;

  'use strict';

  beforeEach(() => {
    req = reqres.req();
    res = reqres.res();

    req.form.options = {};

    controller = new DummyController({ template: 'index', route: '/index' });
  });

  describe('configure', () => {
    let sandbox;

    beforeEach(() => {
      sandbox = sinon.createSandbox();
      req.form.options.fields = {
        ImAURL: {
          validate: 'notUrl'
        },
        'application-type': {
          validate: ['required']
        },
        'application-type-other': {
          validate: ['required', {type: 'maxlength', arguments: 50}]
        }
      };

      sandbox.stub(Controller.prototype, 'configure').yieldsAsync();
    });

    afterEach(() => {
      sandbox.restore();
    });

    describe('validation', () => {
      it('notUrl should not accept a URL input', () => {
        req.form.values.ImAURL = 'www.google.com';
        controller._validate(req, res, err => {
          err.ImAURL.should.be.an.instanceof(controller.ValidationError);
          err.ImAURL.should.have.property('type').and.equal('notUrl');
        });
      });

      it('adds a `required` validator if the application type is not selected', () => {
        req.sessionModel.set('application-type');
        controller.configure(req, res, () => {
          req.form.options.fields['application-type'].should.have.property('validate');
          expect(req.form.options.fields['application-type'].validate).to.deep.eql(['required' ]);
        });
      });

      it('adds a`required and maxlength` validator to the `other` input box', () => {
        req.sessionModel.set('application-type', 'other');
        controller.configure(req, res, () => {
          req.form.options.fields['application-type-other'].should.have.property('validate');
          expect(req.form.options.fields['application-type-other'].validate).to.deep.eql(
            [
              'required',
              {type: 'maxlength', arguments: 50}
            ]);
        });
      });
    });
  });
});
