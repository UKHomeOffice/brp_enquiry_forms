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
      {
        value: 'work',
        label: 'Work'
      },
      {
        value: 'study-academic-visit',
        label: 'Study/Academic Visit'
      },
      {
        value: 'graduate',
        label: 'Graduate'
      },
      {
        value: 'settlement',
        label: 'Settlement'
      },
      {
        value: 'asylum-humanitarian-protection',
        label: 'Asylum/Humanitarian Protection'
      },
      {
        value: 'joining-family-human-rights',
        label: 'Joining Family/Human Rights'
      },
      {
        value: 'marriage-civil-partnership',
        label: 'Marriage/Civil Partnership'
      },
      {
        value: 'business',
        label: 'Business'
      },
      {
        value: 'uk-ancestry-youth-mobility',
        label: 'UK Ancestry/Youth Mobility'
      },
      {
        value: 'medical-treatment',
        label: 'Medical Treatment'
      },
      {
        value: 'dependant',
        label: 'Dependant'
      },
      {
        value: 'application-type-other',
        label: 'Other',
        toggle: 'application-type-other',
        child: 'input-text'
      }
    ]
  }
};
