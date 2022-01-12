'use strict';

const Controller = require('hof').controller;

//We don't need an actual controller, so just create a dummy
const DummyController = superclass => class DummyController extends superclass {
  configure(req, res, next) {
    super.configure(req, res, next);
  }
};

describe('apps/commong/validation', () => {
  let controller;
  let req;
  let res;

  'use strict';
  
  beforeEach(() => {
    req = reqres.req();
    res = reqres.res();

    req.form.options = {};

    const MyDummyController = DummyController(Controller);
    controller = new MyDummyController({ template: 'index', route: '/index' });
  });

  describe('configure', () => {
    let sandbox;

    beforeEach(() => {
      sandbox = sinon.createSandbox();
      req.form.options.fields = {
        'ImAURL': {
          validate: 'notUrl'
        }
      };

      sandbox.stub(Controller.prototype, 'configure').yieldsAsync();
    });

    afterEach(() => {
      sandbox.restore();
    });

    describe('validation', () => {
      it('notUrl should not accept a URL input', () => {
        req.form.values['ImAURL'] = 'www.google.com';
        
        controller._validate(req, res, err => {
          err['ImAURL'].should.be.an.instanceof(controller.ValidationError);
          err['ImAURL'].should.have.property('type').and.equal('notUrl');
        });
      });
    });
  
  });
});
