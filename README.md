# BRP Application project for nodejs

[![Docker Repository on Quay.io](https://quay.io/repository/ukhomeofficedigital/brpapp/status "Docker Repository on Quay.io")](https://quay.io/repository/ukhomeofficedigital/brpapp) [![Build Status](https://travis-ci.org/UKHomeOffice/brp_app.svg)](https://travis-ci.org/UKHomeOffice/brp_app)

## Contents

* [Quick start](#quick-start)
* [User journeys](#user-journeys)
* [Environment variables](#environment-variables)
* [Development documentation](#development-documentation)
* [Testing email locally](#testing-email-locally)
* [Npm scripts](#npm-scripts)
* [Acceptance tests](#acceptance-tests)

## Quick start

Install the dependencies and build the project resources
```bash
$ npm install
```

Install `Redis` and make sure you have a running redis instance in the background.

Tested running on redis server version v6.0.9, and npm version v8.10.0.

Initiate the server in development mode (Express is used to serve the static resources in development).
```bash
$ npm run dev
```

## User journeys

Then select one of the following journeys to see the applcation in action

- [Collection](http://localhost:8080/collection)
- [Someone else](http://localhost:8080/someone-else)
- [Not arrived](http://localhost:8080/not-arrived)
- [Correct mistakes](http://localhost:8080/correct-mistakes)
- [Lost or stolen](http://localhost:8080/lost-stolen)

## Environment variables

Full list of [environment variables](./documentation/ENVIRONMENT_VARIABLES.md)

## Development documentation

See the [development documentation](./documentation/DEVELOPMENT.md) for a complete description of the application and how to maintain and support BRP.

## Testing email locally

Run the following docker command to run maildev

```bash
docker run -p 1080:80 -p 1025:25 djfarrelly/maildev
```

set the following local environment variables

```bash
EMAIL_PORT=1025
EMAIL_HOST='localhost'
EMAIL_SECURE='false'
SMTP_USER='test'
EMAIL_IGNORE_TLS='true'
```
Run the app like normal and you should see all emails going to http://localhost:1080/

## NPM scripts

Start the application in default mode (production).
We use Nginx to serve our static resources in production and ci.
```bash
$ npm start
```

Start the application with [Nodemon](https://www.npmjs.com/package/nodemon) in development mode.
Debug is switched on and the server restarts when the JS or Sass are recompiled.
```bash
$ npm run dev
```

Run the unit tests
```bash
$ npm run test
```

Run the EcmaScript (ES) linter.  Rules are defined in [.eslintrc](./.eslintrc)
```bash
$ npm run lint
```

Run the jscs style checker. Rules are defined in [.jscsrc.json](./.jscsrc.json)
```bash
$ npm run style
```

Compile the Sass to CSS
```bash
$ npm run sass
```

## Acceptance tests

For details on [Acceptance tests](https://github.com/UKHomeOffice/brp_app/tree/master/acceptance_tests)
