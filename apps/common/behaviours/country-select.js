
const _ = require('lodash');

const nationalityFields = [
  'nationality',
  'nominated-nationality',
  'nationality-error',
  'country',
  'someone-else-nationality'
];

module.exports = superclass => class extends superclass {
  configure(req, res, next) {
    const homeOfficeCountries = [''].concat(require('../../../assets/countries').allCountries);

    nationalityFields.forEach(field => {
      if (_.get(req, `form.options.fields[${field}].options`)) {
        req.form.options.fields[field].options = homeOfficeCountries.map(country => {
          const labelString = country !== '' ? country : 'Please select a country';
          return { label: labelString, value: country };
        });
      }
    });

    next();
  }
};
