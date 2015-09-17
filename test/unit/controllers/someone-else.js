'use strict';

var SomeoneElseController = require('../../../controllers/someone-else');

describe('controllers/someone-else', function () {

  var controller;
  var key = '';
  var req = {
    form: {
      values: {
        'arrange-collection-radio': ''
      }
    }
  };

  beforeEach(function () {
    controller = new SomeoneElseController({template: 'index'});
  });

  it('uses the someone-else-date key when someone-else is selected', function () {
    req.form.values['arrange-collection-radio'] = 'someone-else';
    controller.validateField(key, req);

    controller.dateKey.should.equal('someone-else-date');
  });

  it('uses the change-person-date key when change-person is selected', function () {
    req.form.values['arrange-collection-radio'] = 'change-person';
    controller.validateField(key, req);

    controller.dateKey.should.equal('change-person-date');
  });

  it('doesnt use a dateKey if cancel-request is selected', function () {
    req.form.values['arrange-collection-radio'] = 'cancel-request';
    controller.validateField(key, req);

    should.equal(controller.dateKey, undefined);
  });

});
