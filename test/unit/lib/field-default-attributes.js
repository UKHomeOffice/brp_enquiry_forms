'use strict';

describe('lib/field-default-attributes', function () {

  var defaultAttributes;
  var fields;

  beforeEach(function () {
    defaultAttributes = require('../../../lib/field-default-attributes');
  });

  describe('the module', function () {
    it('exports a function', function () {
      (typeof defaultAttributes).should.equal('function');
    });
  });

  describe('extending field attributes', function () {

    beforeEach(function () {
      fields = {
        'some-field-name': {
        }
      }
    });

    it('adds defaults if not available on the field', function () {
      defaultAttributes(fields).should.eql({
        'some-field-name': {
          attributes: [
            {
              attribute: 'autocomplete',
              value: false
            }
          ]
        }
      });
    });

    it('adds to attributes field if it already exists', function () {
      fields['some-field-name'].attributes = [
        {
          attribute: 'data-attribute',
          value: 'something'
        }
      ];
      defaultAttributes(fields).should.eql({
        'some-field-name': {
          attributes: [
            {
              attribute: 'data-attribute',
              value: 'something'
            },
            {
              attribute: 'autocomplete',
              value: false
            }
          ]
        }
      });
    });

    it('doesnt add defaults if theyre already on the field', function () {
      fields['some-field-name'].attributes = [
        {
          attribute: 'autocomplete',
          value: false
        }
      ];
      defaultAttributes(fields);

      fields['some-field-name'].attributes.length.should.equal(1);
    });

    it('allows us to pass default attributes', function () {
      defaultAttributes(fields, [{
        attribute: 'some-other-attribute',
        value: 'some other value'
      }]).should.eql({
        'some-field-name': {
          attributes: [
            {
              attribute: 'some-other-attribute',
              value: 'some other value'
            }
          ]
        }
      });
    });

  });

});
