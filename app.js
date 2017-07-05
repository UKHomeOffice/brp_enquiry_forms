'use strict';

const path = require('path');
const hof = require('hof');

const options = {
  views: path.resolve(__dirname, './apps/common/views'),
  fields: path.resolve(__dirname, './apps/common/fields'),
  routes: [
    require('./apps/correct-mistakes/'),
    require('./apps/collection/'),
    require('./apps/someone-else/'),
    require('./apps/not-arrived/'),
    require('./apps/lost-stolen/')
  ],
  start: false
};

const app = hof(options);

app.use(require('./redirects.js')());

app.start();

