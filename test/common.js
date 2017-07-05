'use strict';

global.chai = require('chai').use(require('sinon-chai'));
global.should = chai.should();
global.expect = chai.expect;
global.sinon = require('sinon');
require('sinomocha')();
require('moment-business');

global.reqres = require('hof-util-reqres');
global.sandbox = require('mocha-sandbox');

process.setMaxListeners(0);
process.stdout.setMaxListeners(0);
