'use strict';

module.exports = {
  'arrange-collection-radio': {
    validate: ['required'],
    className: ['inline', 'form-group'],
    legend: {
      className: 'visuallyhidden',
      value: 'pages.arrange-collection.header'
    },
    options: [{
      value: 'someone-else',
      label: 'fields.arrange-collection-radio.options.someone-else.label',
      toggle: 'someone-else-group'
    }, {
      value: 'change-person',
      label: 'fields.arrange-collection-radio.options.change-person.label',
      toggle: 'change-person-group'
    }, {
      value: 'cancel-request',
      label: 'fields.arrange-collection-radio.options.cancel-request.label',
      toggle: 'cancel-request-message'
    }]
  },
  'someone-else-fullname': {
    validate: ['required'],
    label: 'fields.someone-else-fullname.label',
    dependent: {
      value: 'someone-else',
      field: 'arrange-collection-radio',
    }
  },
  'someone-else-date': {
    legend: 'fields.someone-else-date.legend',
    hint: 'fields.someone-else-date.hint',
    dependent: {
      value: 'someone-else',
      field: 'arrange-collection-radio',
    }
  },
  'someone-else-date-day': {
    validate: ['required', 'numeric'],
    label: 'fields.someone-else-date-day.label',
    dependent: {
      value: 'someone-else',
      field: 'arrange-collection-radio',
    }
  },
  'someone-else-date-month': {
    validate: ['required', 'numeric'],
    label: 'fields.someone-else-date-month.label',
    dependent: {
      value: 'someone-else',
      field: 'arrange-collection-radio',
    }
  },
  'someone-else-date-year': {
    validate: ['required', 'numeric'],
    label: 'fields.someone-else-date-year.label',
    dependent: {
      value: 'someone-else',
      field: 'arrange-collection-radio',
    }
  },
  'someone-else-nationality': {
    validate: ['required'],
    label: 'fields.someone-else-nationality.label',
    dependent: {
      value: 'someone-else',
      field: 'arrange-collection-radio',
    }
  },
  'someone-else-id-number': {
    validate: ['required'],
    label: 'fields.someone-else-id-number.label',
    dependent: {
      value: 'someone-else',
      field: 'arrange-collection-radio',
    }
  },
  'change-person-fullname': {
    validate: ['required'],
    label: 'fields.change-person-fullname.label',
    dependent: {
      value: 'change-person',
      field: 'arrange-collection-radio',
    }
  },
  'change-person-date': {
    legend: 'fields.change-person-date.legend',
    hint: 'fields.change-person-date.hint',
    dependent: {
      value: 'change-person',
      field: 'arrange-collection-radio',
    }
  },
  'change-person-date-day': {
    validate: ['required', 'numeric'],
    label: 'fields.change-person-date-day.label',
    dependent: {
      value: 'change-person',
      field: 'arrange-collection-radio',
    }
  },
  'change-person-date-month': {
    validate: ['required', 'numeric'],
    label: 'fields.change-person-date-month.label',
    dependent: {
      value: 'change-person',
      field: 'arrange-collection-radio',
    }
  },
  'change-person-date-year': {
    validate: ['required', 'numeric'],
    label: 'fields.change-person-date-year.label',
    dependent: {
      value: 'change-person',
      field: 'arrange-collection-radio',
    }
  },
  'change-person-nationality': {
    validate: ['required'],
    label: 'fields.change-person-nationality.label',
    dependent: {
      value: 'change-person',
      field: 'arrange-collection-radio',
    }
  },
  'change-person-id-number': {
    validate: ['required'],
    label: 'fields.change-person-id-number.label',
    dependent: {
      value: 'change-person',
      field: 'arrange-collection-radio',
    }
  }
};
