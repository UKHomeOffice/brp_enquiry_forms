'use strict';
const fetch = require('r2');
const _ = require('underscore');
const config = require('../../../config');

const grantToken = () => {
  const auth = config.caseworking.auth;
  const username = auth.username;
  const password = auth.password;
  return Promise.resolve()
    .then(() => {
      const body = new URLSearchParams();
      body.set('grant_type', 'password');
      body.set('username', username);
      body.set('password', password);
      body.set('client_id', auth.client);
      body.set('client_secret', auth.secret);


      const url = `${auth.url}/realms/${auth.realm}/protocol/openid-connect/token`;

      const opts = {
        method: 'POST',
        body
      };

      return fetch(url, opts).response;
    })
    .then(response => {
      return response.json()
        .then(json => {
          if (response.status > 399) {
            const error = new Error(response.statusText);
            error.status = response.status;
            Object.assign(error, json);
            throw error;
          }
          return json.access_token;
        });
    });
};

module.exports = superclass => class Emailer extends superclass {

  saveValues(req, res, callback) {

    super.saveValues(req, res, function saveModel() {
      if (!config.caseworking.url) {
        return callback(new Error('Caseworking URL is not defined'));
      }
      const service = req.baseUrl.replace('/', '');
      const json = _.pick(req.sessionModel.toJSON(), _.identity);

      json.service = service;

      grantToken()
        .then(token => {
          const headers = {
            Authorization: `Bearer ${token}`
          };
          return fetch(config.caseworking.url, { method: 'post', json, headers }).response;
        })
        .then(() => callback())
        .catch(callback);
    });

  }

};
