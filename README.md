# BRP Application project for nodejs

#### Scripts (For a llist of all scripts available see ./package.json#scripts)

### Current build status

[![Build Status](https://travis-ci.org/UKHomeOffice/brp_app.svg)](https://travis-ci.org/UKHomeOffice/brp_app)

### Set up

- Pull in all the dependencies

```bash
$  npm install
```

- Configure AWS with your credentials

```
 $ cp config/aws.default.json config/aws.json
 $ vim config.aws.json #insert your key and secret
```

-  Start the Node server

```bash
$ npm start
```

- Run nodemon (Node daemon - for development only)

```bash
$ npm test
```

- Plato (execute code quality analyser and browse to and open ./resports/plato/index.html)
```
$ npm run plato
```
