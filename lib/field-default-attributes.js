/* eslint-disable arrow-body-style, no-param-reassign */
'use strict';

const _ = require('underscore');

const DEFAULTS = [{
  attribute: 'autocomplete',
  value: false
}];

module.exports = (fields, defaults) => {
  defaults = defaults || DEFAULTS;

  return _.each(fields, field => {
    field.attributes = field.attributes || [];

    _.each(defaults, attr => {
      const hasAttribute = _.some(field.attributes, fieldAttr => {
        return fieldAttr.attribute === attr.attribute;
      });

      if (hasAttribute === false) {
        field.attributes.push(attr);
      }
    });
  });
};
