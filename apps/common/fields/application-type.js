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
        { value: 'work' },
        { value: 'study-academic-visit' },
        { value: 'graduate' },
        { value: 'settlement' },
        { value: 'asylum-humanitarian-protection' },
        { value: 'joining-family-human-rights' },
        { value: 'marriage-civil-partnership' },
        { value: 'business' },
        { value: 'uk-ancestry-youth-mobility' },
        { value: 'medical-treatment' },
        { value: 'dependant' },
        { value: 'other',
        toggle: 'application-type-other',
        child: 'input-text'},
      ]
  }
};