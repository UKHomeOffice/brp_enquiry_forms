## Fields

Each field consists of a key and object value containing a set of properties. The object value includes properties such as `label` and `validate`.

More of the properties are documented at [HMPO Form Wizard](https://github.com/UKHomeOffice/passports-form-wizard), and [HMPO Form Controller](https://github.com/UKHomeOffice/passports-form-controller#validators)

### Radio control

Open `./routes/fields.js` and append the following before the closing brace;

```js
'options-radio': {
  options: [{
    value: 'yes',
    label: 'Yes'
  }, {
    value: 'no',
    label: 'No'
  }],
  validate: ['required'],
  className: ['inline']
}
```

#### Explanation
From the example above it's fairly easy to see we have configured a radio form control called, 'options-radio'.

- The name 'options-radio' will be mapped to the `name` property of each HTML radio control.
- Each item in `options` corresponds to a radio control, and the fields within each option are mapped to the appropriate HTML radio control.
- As you might imagine, `value` and `label` properties are mapped to the value and label attributes of the HTML.
- `validate` takes a list of one or more, optional validators, [listed here](https://github.com/UKHomeOffice/passports-form-controller/blob/master/lib/validation/validators.js).
- `className` takes a list of classNames that will be mapped to the corresponding HTML element.

###  Date control

In `./routes/fields.js` append the following before the closing brace;

```js
'dob-date': {
  legend: 'Date of birth',
  hint: 'For example, 31 3 1970'
},
'dob-day': {
  validate: ['required', 'numeric'],
  label: 'Day'
},
'dob-month': {
  validate: ['required', 'numeric'],
  label: 'Month'
},
'dob-year': {
  validate: ['required', 'numeric'],
  label: 'Year'
}
```

#### Explanation
The code snippet above displays the four fields we use to configure a date control. The first field; `dob-date`, configures group details, such as a `hint` and can be used to display the groups validation in a template. Each of the other fields may define their own validation contraints, and/or `classNames`, `id`, `name`.


### Text input

Open `./routes/fields.js` and append the following before the closing brace;

```js
'fullname': {
  validate: ['required'],
  dependent: {
    field: 'option-radio',
    value: 'yes'
  }
}
```

#### Explanation
In the above example, a field called 'fullname' is configured to validate as `required` when the field called 'option-radio' has the value 'yes'.
