/* eslint-disable arrow-body-style */
'use strict';

const path = require('path');
const hof = require('hof');
const i18n = hof.i18n({
  path: path.resolve(__dirname, '../apps/common/translations/__lng__/__ns__.json')
});
const logger = require('../lib/logger');

module.exports = () => {
  return (req, res) => {
    logger.warn('Cannot find:', req.url);

    res.status(404).render('404', {
      title: i18n.translate('errors.404.title'),
      description: i18n.translate('errors.404.description')
    });
  };
};
