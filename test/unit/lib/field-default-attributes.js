'use strict';

describe('lib/field-default-attributes', () => {

  var defaultAttributes;
  var fields;

  beforeEach(() => {
    defaultAttributes = require('../../../lib/field-default-attributes');
  });

  describe('the module', () => {
    it('exports a function', () => {
      (typeof defaultAttributes).should.equal('function');
    });
  });

  describe('extending field attributes', () => {

    beforeEach(() => {
      fields = {
        'some-field-name': {
        }
      };
    });

    it('adds defaults if not available on the field', () => {
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

    it('adds to attributes field if it already exists', () => {
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

    it('doesnt add defaults if theyre already on the field', () => {
      fields['some-field-name'].attributes = [
        {
          attribute: 'autocomplete',
          value: false
        }
      ];
      defaultAttributes(fields);

      fields['some-field-name'].attributes.length.should.equal(1);
    });

    it('allows us to pass default attributes', () => {
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
