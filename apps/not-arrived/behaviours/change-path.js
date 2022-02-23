'use strict';

module.exports = superclass =>
  class LetterRecieved extends superclass {
    saveValues(req, res, next) {
      if(req.form.values.collection === 'yes') {
        res.redirect('/collection/where');
        res.end();
      }else{
        super.saveValues(req, res, next);
      }
    }
  };
