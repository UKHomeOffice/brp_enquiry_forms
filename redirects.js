'use strict';

const express = require('express');
const path = require('path');

const redirects = [
  {
    from: '/lost-stolen-damaged',
    to: '/lost-stolen'
  }
];

module.exports = () => {

  const router = express.Router();

  redirects.forEach(redirect => {
    router.use(redirect.from, (req, res) => {
      res.redirect(path.join(redirect.to, req.path));
    });
  });

  return router;

};
