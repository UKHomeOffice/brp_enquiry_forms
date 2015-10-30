# Development & Maintenance

This document intends to detail the configuration steps required to support and maintain the BRP application. This document also hopes to help troubleshoot some of the more common issues one might encounter during any additional development phase.

For instances when this document does not provide enough support, we suggest that the developer becomes familiar with the following application dependencies:

- [Express](https://www.npmjs.com/package/express) - Server
- [HOF (Home Office Forms)](https://www.npmjs.com/package/hmpo-form-wizard) - Create and orchestrate forms
- [Mustache](https://www.npmjs.com/package/mustache) - A logic-less Javascript template system.
- [Connect Redis Crypto](https://www.npmjs.com/package/connect-redis-crypto) - Encrypted session storage.
- [Browserify](https://www.npmjs.com/package/browserify) - Node-style dependency injection in the browser.

A complete list of the dependencies on which this application depends is found in [package.json](./package.json)

## Settings and configuration

#### [Application settings](./development/APP_SETTINGS.md)

## Building blocks

#### [Field configuration and options](./development/FIELDS.md)
