'use-strict';

module.exports = {
  'application-type': {
    mixin: 'radio-group',
    validate: ['required'],
    className: ['form-group'],
    legend: {
      className: 'visuallyhidden'
    },
    options: [
        { value: 'Work' },
        { value: 'Study/Academic Visit' },
        { value: 'Graduate' },
        { value: 'Settlement' },
        { value: 'Asylum/Humanitarian Protection' },
        { value: 'Joining Family/Human Rights' },
        { value: 'Marriage/Civil Partnership' },
        { value: 'Business' },
        { value: 'UK Ancestry/Youth Mobility' },
        { value: 'Medical Treatment' },
        { value: 'Dependant' },
        { value: 'Other',
        toggle: 'application-type-other',
        child: 'input-text'},
      ]
  }
};