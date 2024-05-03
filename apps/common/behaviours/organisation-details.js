module.exports = superclass => class extends superclass {
  locals(req, res) {
    const locals = super.locals(req, res);

    // set org-type options
    if (req.form.values['org-type'] && req.form.values['org-type'] === 'pbs') {
      locals.sponsorChecked = true;
    }
    if (req.form.values['org-type'] && req.form.values['org-type'] === 'legal') {
      locals.legalChecked = true;
    }
    if (req.form.values['org-type'] && req.form.values['org-type'] === 'relative') {
      locals.relativeChecked = true;
    }
    if (req.form.values['org-type'] && req.form.values['org-type'] === 'support') {
      locals.supportChecked = true;
    }
    return locals;
  }
};
