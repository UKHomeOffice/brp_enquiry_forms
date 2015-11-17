'use strict';

var _ = require('underscore');

var DEFAULTS = [{
  attribute: 'autocomplete',
  value: false
}];

module.exports = function defaultAttributes(fields, defaults) {
  defaults = defaults || DEFAULTS;

  return _.each(fields, function singleField(field) {

    field.attributes = field.attributes || [];

    _.each(defaults, function attribute(attr) {
      var hasAttribute = _.some(field.attributes, function fieldAttributes(fieldAttr) {
        return fieldAttr.attribute === attr.attribute;
      });

      if (hasAttribute === false) {
        field.attributes.push(attr);
      }
    });
  });
};
