module.exports = superclass => class extends superclass {
  // remove govuk-radios--inline class when toggling inline radio buttons to fix alignment
  locals(req, res) {
    const locals = super.locals(req, res);
    if (locals.route === 'tracking-number') {
      if (req.sessionModel.get('tracking-number-radio') === 'yes' || locals.errorLength) {
        req.form.options.fields['tracking-number-radio'].className = ['govuk-radios'];
      }
    }
    if (locals.route === 'same-address') {
      if (req.sessionModel.get('address-match') === 'yes') {
        req.form.options.fields['address-match'].className = ['govuk-radios'];
      }
    }
    return locals;
  }
};
