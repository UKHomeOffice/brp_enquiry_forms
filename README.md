# BRP Application project for nodejs

[![Docker Repository on Quay.io](https://quay.io/repository/ukhomeofficedigital/brpapp/status "Docker Repository on Quay.io")](https://quay.io/repository/ukhomeofficedigital/brpapp)

## Quick start

```bash
$ npm install
```

Initiate the server in development mode (Express is used to serve the static resources in development).
```bash
$ npm run dev
```

**Select one of the following journeys to see the applcation in action**

- [Collection](http://localhost:8080/collection)
- [Someone else](http://localhost:8080/someone-else)
- [Not arrived](http://localhost:8080/not-arrived)
- [Correct mistakes](http://localhost:8080/correct-mistakes)
- [Lost, damaged or stolen](http://localhost:8080/lost-damaged-stolen)



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

Run the EcmaScript (ES) linter.  Rules are deinfed in [.eslintrc](./.eslintrc)
```bash
$ npm run lint
```

Run the jscs style checker. Rules are defined in [.jscsrc.json](./.jscsrc.json)
```bash
$ npm run style
```

Analyse the quality of the codebase (for results - open [./reports/plato/index.html](./reports/plato/index.html))
```bash
$ npm run quality
```

Compile the Sass to CSS
```bash
$ npm run sass
```

_____________________________________________________________

- For details on [Acceptance tests](https://github.com/UKHomeOffice/brp_app/tree/master/acceptance_tests)

- See the [package.json](./package.json) for a full list of scripts.

- Full list of [environment variables](./documentation/ENVIRONMENT_VARIABLES.md)

