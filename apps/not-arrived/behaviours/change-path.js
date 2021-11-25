'use strict';

module.exports = superclass =>
  class LetterRecieved extends superclass {
    saveValues(req, res, next) {
      if(req.form.values.collection === 'yes') {
        res.statusCode = 302;
        res.setHeader('Location', 'https://www.biometric-residence-permit.service.gov.uk/collection/where');
        res.end();
      }else{
        super.saveValues(req, res, next);
      }
    }
  };
