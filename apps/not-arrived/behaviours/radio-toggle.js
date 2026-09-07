module.exports = superclass => class extends superclass {
  locals(req, res) {
    const locals = super.locals(req, res);
    if (locals.route === 'same-address') {
      if (req.sessionModel.get('address-match') === 'yes') {
        req.form.options.fields['address-match'].className = ['govuk-radios'];
      }
    }
    return locals;
  }
};
